import { Box, Button } from "~/components"
import { RiSmartphoneLine } from "react-icons/ri";
import { useFormikContext } from "formik";
import { IFormValues } from ".";

export const SendCode = () => {

  const { values, handleChange, isSubmitting } = useFormikContext<IFormValues>();

  return (
    <Box className="flex flex-col gap-4">
      <h1 className="text-stone-100 text-2xl text-center">Entrar com número de telefone</h1>

      <Box className="flex">
        <Box className="flex justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600 w-14 rounded-bl-md rounded-tl-md">
          <RiSmartphoneLine className="w-7 h-7 text-white" />
        </Box>
        <input 
          className="p-2 outline-none bg-white/20 placeholder:text-white w-full rounded-br-md rounded-tr-md"
          type="tel"
          placeholder="(00) 00000-0000"
          value={values.phoneNumber}
          onChange={handleChange("phoneNumber")}
        />
      </Box>
      <Button type="submit" loading={isSubmitting}>Enviar código</Button>
    </Box>
  )
}