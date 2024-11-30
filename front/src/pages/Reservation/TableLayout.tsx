export const TableLayout = () => {

  const tables = [
    {
      name: "Mesa 1",
      seats: 4
    },
    {
      name: "Mesa 2",
      seats: 4
    },
    {
      name: "Mesa 3",
      seats: 4
    },
    {
      name: "Mesa 4",
      seats: 4
    },
    {
      name: "Mesa 5",
      seats: 4
    },
    {
      name: "Mesa 6",
      seats: 4
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-4">
      {tables.map((table, key) => (
        <div className="bg-white/10 p-4 rounded-md text-white cursor-pointer hover:bg-white/20">
          <div>{table.name}</div>
          <div>Até {table.seats} pessoas</div>
        </div>
      ))}
    </div>
  )
}