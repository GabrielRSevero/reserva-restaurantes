import { ReactNode } from "react"
import { Loading } from "../Loading"
import { Box } from "../Box"

interface IButton {
  type?: "button" | "submit"
  onClick?: () => void
  children: ReactNode
  loading?: boolean
}

export const Button = ({ type = "button", onClick, children, loading = false }: IButton) => {
  return (
    <button 
      type={type} 
      className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md py-3 text-white uppercase w-full"
      onClick={onClick}
    >
      {loading ? (
        <Box className="flex justify-center items-center gap-2">
          <Loading />
          Aguarde...
        </Box>
      ) : (
        children
      )}
    </button>
  )
}