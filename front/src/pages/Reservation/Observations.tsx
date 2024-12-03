import { useFormikContext } from "formik";
import { IFormValues } from ".";
import { Box, Button } from "~/components";
import { format } from "date-fns";

export const Observations = () => {

  const { values, handleChange } = useFormikContext<IFormValues>();

  return (
    <Box className="grid gap-5">
      <h2 className="text-white text-2xl text-center">Cheque todas as informações antes de finalizar a reserva:</h2>
      <Box className="flex flex-col gap-4">
        <Box className="bg-white/10 text-white p-4 rounded-md">
          Reserva para a data: {format(values.reservation_date, "dd/MM/yyyy HH:mm")}
        </Box>
        <Box className="bg-white/10 text-white p-4 rounded-md">
          Mesa: {values.table_name}
        </Box>
        <Box className="grid gap-2">
          <label htmlFor="observations" className="text-white">Informações adicionais:</label>
          <textarea name="observations" id="" className="bg-white/10 rounded-md outline-none p-2 placeholder:text-white" onChange={handleChange("observations")}></textarea>
        </Box>
      </Box>

      <Button type="submit">Concluir reserva</Button>
    </Box>
  )
}