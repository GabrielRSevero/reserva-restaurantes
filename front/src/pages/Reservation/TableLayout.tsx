import { useFormikContext } from "formik";
import { IFormValues } from ".";

export const TableLayout = () => {

  const { setFieldValue } = useFormikContext<IFormValues>();

  const tables = [
    {
      id: 1,
      name: "Mesa 1",
      seats: 4
    },
    {
      id: 1,
      name: "Mesa 2",
      seats: 4
    },
    {
      id: 1,
      name: "Mesa 3",
      seats: 4
    },
    {
      id: 1,
      name: "Mesa 4",
      seats: 4
    },
    {
      id: 1,
      name: "Mesa 5",
      seats: 4
    },
    {
      id: 1,
      name: "Mesa 6",
      seats: 4
    },
  ]

  const select = (table: any) => {
    setFieldValue("table_id", table.id)
    setFieldValue("table_name", table.name)
    setFieldValue("step", 3)
  } 

  return (
    <div className="grid grid-cols-4 gap-4">
      {tables.map((table, key) => (
        <div key={key} className="bg-white/10 p-4 rounded-md text-white cursor-pointer hover:bg-white/20" onClick={() => select(table)}>
          <div>{table.name}</div>
          <div>Até {table.seats} pessoas</div>
        </div>
      ))}
    </div>
  )
}