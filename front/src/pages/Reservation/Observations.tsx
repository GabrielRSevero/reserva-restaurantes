import { useFormikContext } from "formik";
import { IFormValues } from ".";
import { Box, Button } from "~/components";
import { format } from "date-fns";
import { GrLinkPrevious } from "react-icons/gr";

export const Observations = () => {

  const { values, handleChange, setFieldValue, isSubmitting } = useFormikContext<IFormValues>();

  const prevStep = () => {
    setFieldValue("step", 2)
  }

  return (
    <Box className="grid gap-5 p-2">
      <h2 className="text-damask-800 text-2xl text-center">Cheque todas as informações antes de finalizar a reserva:</h2>
      <Box className="flex flex-col gap-4">
        <Box className="border border-damask-200 text-damask-800 p-4 rounded-sm">
          Reserva para a data: {format(values.reservation_date, "dd/MM/yyyy HH:mm")}
        </Box>
        <Box className="border border-damask-200 text-damask-800 p-4 rounded-sm">
          Mesa: {values.table_name}
        </Box>
        <Box className="grid gap-2">
          <label htmlFor="observations" className="text-damask-800">Informações adicionais:</label>
          <textarea name="observations" id="" className="border border-damask-200 rounded-sm outline-none p-2 placeholder:text-damask-800 bg-transparent" onChange={handleChange("observations")} placeholder="Adicione informações"></textarea>
        </Box>
      </Box>


      <Box className="grid grid-cols-4">
        <Button className="col-start-1 flex gap-2 justify-center items-center" style="secondary" type="button" onClick={prevStep}>
          <GrLinkPrevious />
          Escolher outra mesa
        </Button>

        <Button className="col-start-4" type="submit" loading={isSubmitting}>Concluir reserva</Button>
      </Box>
    </Box>
  )
}