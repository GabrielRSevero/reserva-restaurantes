import { format } from "date-fns";
import useSWR from "swr"
import { Box } from "~/components"
import api from "~/services/api";

export const Reservations = () => {

  const fetcher = (url: string) => api.get(url).then(res => res.data);

  const { data, error, isLoading } = useSWR(`/reservations?customer_id=${1}`, fetcher)

  return (
    <Box className="h-full flex flex-col gap-10 justify-center items-center bg-gradient-to-r from-pink-500 to-rose-500">
      <div className="bg-white/10 p-6 rounded-md w-[600px] h-[600px] grid gap-2 overflow-auto">
        {data?.map((item: any, key: number) => (
          <div className="bg-white/10 p-2 rounded-md text-white grid gap-2" key={key}>
            <div className="flex justify-between">
              <div>
                Reserva número: #{item.id}
              </div>
              <div>
                Status: Pendente
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                Data: {format(item.date, "dd/MM/yyyy")}
              </div>
              <div>
                Hora: {format(item.date, "HH:ss")}
              </div>
              <div>
                Mesa: {item.table_id}
              </div>
            </div>
            <div>
              Observações: {item.obs}
            </div>
          </div>
        ))}
      </div>
    </Box>
  )
}