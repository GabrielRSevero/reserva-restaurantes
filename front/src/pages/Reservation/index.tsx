import { format } from "date-fns";
import { Formik } from "formik"
import { Form } from "react-router-dom"
import { Box, Stepper } from "~/components"
import { Schedules } from "./Schedules";
import { TableLayout } from "./TableLayout";
import { useState } from "react";

export interface IFormValues {
  reservation_date: string
  table: string
}

const Reservation = () => {

  const [currentStep, setCurrentStep] = useState<number>(1)

  const initialValues: IFormValues = {
    reservation_date: "",
    table: "",
  }

  const handleSubmit = async (values: IFormValues) => {
    console.log("aaaa")
  }

  return (
    <Box className="h-full flex flex-col gap-10 justify-center items-center bg-gradient-to-r from-pink-500 to-rose-500">
      <h1 className="text-stone-100 text-2xl text-center">Realizar reserva</h1>
      <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, isSubmitting, handleChange }) => (
          <Form>
              <Stepper currentStep={currentStep} steps={[
                {
                  name: "Escolher horário",
                  details: "Escolha um horário dentro dos horários disponíveis",
                  onClick: () => setCurrentStep(1),
                  element: <Schedules />
                },
                {
                  name: "Escolher mesa",
                  details: "Utilize nosso layout para selecionar a mesa",
                  onClick: () => setCurrentStep(2),
                  element: <TableLayout />
                },
                {
                  name: "Observações",
                  details: "Outras informações",
                  onClick: () => setCurrentStep(3),
                }
              ]} />

              <button type="button" onClick={() => console.log(values)}>TESTE</button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default Reservation