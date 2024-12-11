import { forwardRef, useImperativeHandle, useState } from "react";
import { Box, Button, Modal } from "~/components";
import { VscTrash } from "react-icons/vsc";
import { GrLinkPrevious } from "react-icons/gr";
import { format } from "date-fns";

export interface CancelModalHandle {
  show: (item: any) => void;
  hide: () => void;
}

const CancelModal = forwardRef<CancelModalHandle>((props, ref) => {

  const [show, setShow] = useState(false)

  const [item, setItem] = useState<any>(null)

  const hide = () => {
    setShow(false)
  }

  useImperativeHandle(ref, () => ({
    show(item: any) {
      setItem(item)
      setShow(true)
    },
    hide() {
      setShow(false)
    }
  }))

  return (
    <Modal show={show} onClose={hide}>
      <Box className="grid gap-2 p-2">
        <h4 className="text-damask-800 text-xl">Tem certeza que deseja cancelar esta reserva?</h4>

        {item && (
          <Box className="border border-damask-200 p-2 rounded-sm text-damask-800 grid gap-2">
            <Box className="flex justify-between">
              <Box>
                Reserva número: #{item?.id}
              </Box>
              <Box>
                Status: Pendente
              </Box>
            </Box>
            <Box className="grid grid-cols-3">
              <Box>
                Data: {format(item?.date, "dd/MM/yyyy")}
              </Box>
              <Box>
                Hora: {format(item?.date, "HH:ss")}
              </Box>
              <Box>
                Mesa: {item?.table_id}
              </Box>
            </Box>
            <Box>
              Observações: {item?.obs}
            </Box>
          </Box>
        )}

        <span className="text-damask-200">Aviso: após o cancelamento não será possível reabrir a mesma reserva</span>

        <Box className="grid grid-cols-2 gap-2">
          <Button className="flex gap-2 justify-center items-center" style="secondary" type="button" onClick={hide}>
            Não, quero manter
            <GrLinkPrevious />
          </Button>

          <Button className="flex gap-2 justify-center items-center" style="primary" type="button">
            Sim, quero cancelar
            <VscTrash className="w-4 h-4" />
          </Button>
      </Box>
      </Box>
    </Modal>
  )
})

export default CancelModal