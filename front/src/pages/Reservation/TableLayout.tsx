import { useFormikContext } from "formik";
import { IFormValues } from ".";
import { Box, Button } from "~/components";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export const TableLayout = () => {

  const { values, setFieldValue } = useFormikContext<IFormValues>();

  const tables = [
    {
      id: 1,
      name: "Mesa 1",
      seats: 4
    },
    {
      id: 2,
      name: "Mesa 2",
      seats: 4
    },
    {
      id: 3,
      name: "Mesa 3",
      seats: 4
    },
    {
      id: 4,
      name: "Mesa 4",
      seats: 4
    },
    {
      id: 5,
      name: "Mesa 5",
      seats: 4
    },
    {
      id: 6,
      name: "Mesa 6",
      seats: 4
    },
  ]

  const select = (table: any) => {
    setFieldValue("table_id", table.id)
    setFieldValue("table_name", table.name)
  } 

  const prevStep = () => {
    setFieldValue("step", 1)
  }

  const nextStep = () => {
    setFieldValue("step", 3)
  }

  return (
    <Box className="grid gap-2 p-2">
      <Box className="grid grid-cols-2 gap-2">
        {tables.map((table, key) => (
          <Box key={key} className={`border border-damask-200 p-4 rounded-sm text-damask-800 cursor-pointer hover:bg-damask-200 ${values.table_id == String(table.id) && "bg-damask-200"}`} onClick={() => select(table)}>
            <Box>{table.name}</Box>
            <Box>Até {table.seats} pessoas</Box>
          </Box>
        ))}
      </Box>

      <Box className="grid grid-cols-4">
        <Button className="col-start-1 flex gap-2 justify-center items-center" style="secondary" type="button" onClick={prevStep}>
          <GrLinkPrevious />
          Escolher outro horário
        </Button>

        <Button className="col-start-4 flex gap-2 justify-center items-center" style="secondary" type="button" onClick={nextStep} active={values.table_id ? true : false}>
          Escolher mesa
          <GrLinkNext />
        </Button>
      </Box>
    </Box>
  )
}