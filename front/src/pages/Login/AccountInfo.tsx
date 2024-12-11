import { Box, Button, Input } from "~/components"
import { useFormikContext } from "formik";
import { GrLinkNext } from "react-icons/gr";
import { IFormValues } from ".";

export const AccountInfo = () => {

  const { values, handleChange, isSubmitting } = useFormikContext<IFormValues>();

  return (
    <Box className="flex flex-col gap-4 pt-10 pb-2 px-2">
      <h1 className="text-damask-600 text-2xl text-center">Suas informações</h1>

      <Input 
        label="Nome de usuário"
        name="name"
        placeholder="Informe seu nome"
        value={values.userName}
        onChange={handleChange("userName")}
      />

      <Box className="grid grid-cols-3">
        <Button className="col-start-3 flex gap-2 justify-center items-center" style="secondary" type="submit" loading={isSubmitting}>
          Salvar e continuar
          <GrLinkNext />
        </Button>
      </Box>
    </Box>
  )
}