import { format } from "date-fns";
import { Formik } from "formik"
import { Form } from "react-router-dom"
import { Box, Button, Input } from "~/components"
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

interface IFormValues {
  date: string
  code: string
  userName: string
}

const Reservation = () => {

  const initialValues: IFormValues = {
    date: "",
    code: "",
    userName: "",
  }

  const handleSubmit = async (values: IFormValues) => {
    console.log(format(new Date(), 'EEEE'))
  }

  const schedules: any = {
    Monday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    Tuesday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    Wednesday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    Thursday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    Friday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    Saturday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    Sunday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"]
  }

  return (
    <Box className="h-full flex justify-center items-center bg-gradient-to-r from-pink-500 to-rose-500">
      <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, isSubmitting, handleChange }) => (
          <Form>
            <Box className="flex flex-col gap-4 bg-white/10 p-10 rounded-md w-[400px]">
              <h1 className="text-stone-100 text-2xl text-center">Realizar reserva</h1>

              <Input label="Quantidade de pessoas" placeholder="Informe a quantidade de pessoas" type="number" />
               
              <input className="p-2 outline-none bg-white/20 placeholder:text-white w-full rounded-md" type="date" placeholder="00/00/0000" />

              <Input label="Horário" placeholder="00:00" />

              <Input label="Observações" placeholder="..." />

              <Box className="flex justify-between gap-2">
                <button className="bg-white/10 px-6 rounded-md" type="button">
                  <Link to="/">
                    <GrLinkPrevious className="w-4 h-4 text-white" />
                  </Link>
                </button>

                <Button type="submit" loading={isSubmitting}>Salvar reserva</Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default Reservation