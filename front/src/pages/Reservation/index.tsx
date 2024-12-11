import { Form, Formik } from "formik"
import { Box, Stepper } from "~/components"
import { Schedules } from "./Schedules";
import { TableLayout } from "./TableLayout";
import { Observations } from "./Observations";
import api from "~/services/api";
import { useNavigate } from "react-router-dom";

export interface IFormValues {
  reservation_date: string
  step: number
  table_id: string
  table_name: string
  observations: string
}

const Reservation = () => {

  const navigate = useNavigate()

  const initialValues: IFormValues = {
    reservation_date: "",
    step: 1,
    table_id: "",
    table_name: "",
    observations: "",
  }

  const handleSubmit = async (values: IFormValues) => {
    const user = JSON.parse(localStorage.getItem("user") ?? "")

    const response = await api.post("/reservations", {
      customer_id: user.id,
      date: values.reservation_date,
      table_id: values.table_id,
      obs: values.observations,
    })

    if (response.status === 200) {
      navigate("/reservas")
    }
  }

  return (
    <Box className="h-full flex flex-col gap-10 justify-center items-center">
      <h1 className="text-damask-800 text-2xl text-center">Realizar reserva</h1>
      <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
              <Stepper currentStep={values.step} steps={[
                {
                  name: "Escolher horário",
                  details: "Escolha um horário dentro dos horários disponíveis",
                  element: <Schedules />
                },
                {
                  name: "Escolher mesa",
                  details: "Utilize nosso layout para selecionar a mesa",
                  element: <TableLayout />
                },
                {
                  name: "Observações",
                  details: "Outras informações",
                  element: <Observations />
                }
              ]} />
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default Reservation