import { Box, Button } from "~/components"
import { useFormikContext } from "formik";
import { IFormValues } from ".";

export const AccountInfo = () => {

  const { values, handleChange, isSubmitting } = useFormikContext<IFormValues>();

  return (
    <Box className="flex flex-col gap-4">
      <h1 className="text-stone-100 text-2xl text-center">Suas informações</h1>

      <Box className="flex flex-col gap-1">
        <label htmlFor="name" className="text-white">Nome de usuário:</label>
        <input
          className="p-2 outline-none bg-white/20 placeholder:text-white w-full rounded-md"
          type="text"
          id="name"
          placeholder="Informe seu nome"
          value={values.userName}
          onChange={handleChange("userName")}
        />
      </Box>
      <Button type="submit" loading={isSubmitting}>Salvar e continuar</Button>
    </Box>
  )
}