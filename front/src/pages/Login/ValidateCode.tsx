import { Box, Button, Input } from "~/components"
import { useFormikContext } from "formik";
import { IFormValues } from ".";

export const ValidateCode = () => {

  const { values, handleChange, isSubmitting } = useFormikContext<IFormValues>();

  return (
    <Box className="flex flex-col gap-4">
      <h1 className="text-stone-100 text-2xl text-center">Informar código</h1>

      <Input
        placeholder="XXXXXX"
        value={values.code}
        onChange={handleChange("code")}
      />

      <Button type="submit" loading={isSubmitting}>Validar código</Button>
    </Box>
  )
}