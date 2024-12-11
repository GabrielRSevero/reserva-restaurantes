import { Box, Button, Input } from "~/components"
import { RiSmartphoneLine } from "react-icons/ri";
import { useFormikContext } from "formik";
import { GrLinkNext } from "react-icons/gr";
import { IFormValues } from ".";

export const SendCode = () => {

  const { values, handleChange, isSubmitting } = useFormikContext<IFormValues>();

  return (
    <Box className="flex flex-col gap-4 pt-10 pb-2 px-2">
      <h1 className="text-damask-600 text-2xl text-center">Entrar com número de telefone</h1>

      <Input 
        pre={<RiSmartphoneLine className="w-7 h-7 text-white" />}
        value={values.phoneNumber}
        onChange={handleChange("phoneNumber")}
        placeholder={"(00) 00000-0000"}
        type="tel"
      />

      <Box className="grid grid-cols-4">
        <Button className="col-start-4 flex gap-2 justify-center items-center" style="secondary" type="submit" loading={isSubmitting}>
          Enviar código 
          <GrLinkNext />
        </Button>
      </Box>
    </Box>
  )
}