import { Box, Button, Input } from "~/components"
import { useFormikContext } from "formik";
import { GrLinkNext } from "react-icons/gr";
import { IFormValues } from ".";

export const ValidateCode = () => {

  const { values, handleChange, isSubmitting } = useFormikContext<IFormValues>();

  return (
    <Box className="flex flex-col gap-4 pt-10 pb-2 px-2">
      <h1 className="text-damask-600 text-2xl text-center">Informar código</h1>

      <Input
        placeholder="XXXXXX"
        value={values.code}
        onChange={handleChange("code")}
      />

      <Box className="grid grid-cols-4">
        <Button className="col-start-4 flex gap-2 justify-center items-center" style="secondary" type="submit" loading={isSubmitting}>
          Validar código 
          <GrLinkNext />
        </Button>
      </Box>
    </Box>
  )
}