import { Box, Button, Input } from "~/components"
import { useFormikContext } from "formik";
import { IFormValues } from ".";

export const AccountInfo = () => {

  const { values, handleChange, isSubmitting } = useFormikContext<IFormValues>();

  return (
    <Box className="flex flex-col gap-4">
      <h1 className="text-stone-100 text-2xl text-center">Suas informações</h1>

      <Input 
        label="Nome de usuário"
        name="name"
        placeholder="Informe seu nome"
        value={values.userName}
        onChange={handleChange("userName")}
      />

      <Button type="submit" loading={isSubmitting}>Salvar e continuar</Button>
    </Box>
  )
}