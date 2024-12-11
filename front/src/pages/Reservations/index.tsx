import { format } from "date-fns";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import useSWR from "swr"
import { Box, Button, Modal } from "~/components"
import { Loading } from "~/components/Loading";
import api from "~/services/api";
import CancelModal from "./CancelModal";
import { useRef } from "react";

export const Reservations = () => {

  const navigate = useNavigate()

  const cancelReservationModalRef = useRef<any>(null)

  const fetcher = (url: string) => api.get(url).then(res => res.data);

  const { data, isLoading } = useSWR(`/reservations?customer_id=${1}`, fetcher)

  const cancel = () => {
    navigate("/")
  }

  const navigateToReservationPage = () => {
    navigate("/reservar")
  }

  return (
    <Box className="h-full flex flex-col gap-2 justify-center items-center">

      <CancelModal ref={cancelReservationModalRef} />

      <Box className="grid grid-cols-2 gap-2 w-[600px]">
        <Button className="flex gap-2 justify-center items-center" style="secondary" type="button" onClick={cancel}>
          <GrLinkPrevious />
          Voltar para a página inicial
        </Button>

        <Button className="flex gap-2 justify-center items-center" style="secondary" type="button" onClick={navigateToReservationPage}>
          Realizar reserva
          <GrLinkNext />
        </Button>
      </Box>

      <Box className="border border-damask-200 p-2 rounded-sm w-[600px] h-[600px] grid gap-2 overflow-auto">
        {isLoading ? (
          <Box className="flex justify-center items-center text-2xl gap-4 text-damask-800">
            Aguarde...
            <Loading />
          </Box>
        ) : (
          data?.map((item: any, key: number) => (
            <Box className="border border-damask-200 p-2 rounded-sm text-damask-800 grid gap-2" key={key}>
              <Box className="flex justify-between">
                <Box>
                  Reserva número: #{item.id}
                </Box>
                <Box>
                  Status: Pendente
                </Box>
              </Box>
              <Box className="grid grid-cols-3">
                <Box>
                  Data: {format(item.date, "dd/MM/yyyy")}
                </Box>
                <Box>
                  Hora: {format(item.date, "HH:ss")}
                </Box>
                <Box>
                  Mesa: {item.table_id}
                </Box>
              </Box>
              <Box>
                Observações: {item.obs}
              </Box>
              <Box>
                <button className="border border-damask-200 p-2 rounded-sm" onClick={() => cancelReservationModalRef.current.show(item)}>Cancelar reserva</button>
              </Box>
            </Box>
          ))
        )}
      </Box>
    </Box>
  )
}