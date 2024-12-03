import { Form, Formik } from "formik"
import { Box, Stepper } from "~/components"
import { Schedules } from "./Schedules";
import { TableLayout } from "./TableLayout";
import { Observations } from "./Observations";
import api from "~/services/api";

export interface IFormValues {
  reservation_date: string
  step: number
  table_id: string
  table_name: string
  observations: string
}

const Reservation = () => {

  const initialValues: IFormValues = {
    reservation_date: "",
    step: 1,
    table_id: "",
    table_name: "",
    observations: "",
  }

  const handleSubmit = async (values: IFormValues) => {
    console.log(values)

    const user = localStorage.getItem("user")

    console.log(user)

    const response = await api.post("/reservations", {
      customer_id: 1,
      date: values.reservation_date,
      table_id: 2,
      obs: "",
    })
  }

  return (
    <Box className="h-full flex flex-col gap-10 justify-center items-center bg-gradient-to-r from-pink-500 to-rose-500">
      <h1 className="text-stone-100 text-2xl text-center">Realizar reserva</h1>
      <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
              <Stepper currentStep={values.step} steps={[
                {
                  name: "Escolher horário",
                  details: "Escolha um horário dentro dos horários disponíveis",
                  onClick: () => setFieldValue("step", 1),
                  element: <Schedules />
                },
                {
                  name: "Escolher mesa",
                  details: "Utilize nosso layout para selecionar a mesa",
                  onClick: () => setFieldValue("step", 2),
                  element: <TableLayout />
                },
                {
                  name: "Observações",
                  details: "Outras informações",
                  onClick: () => setFieldValue("step", 3),
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