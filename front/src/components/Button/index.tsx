import { ReactNode } from "react"
import { Loading } from "../Loading"
import { Box } from "../Box"

interface IButton {
  type?: "button" | "submit"
  onClick?: () => void
  children: ReactNode
  loading?: boolean
  style?: "primary" | "secondary"
  className?: string
  active?: boolean
}

export const Button = ({ type = "button", onClick, children, loading = false, style = "primary", className, active = true }: IButton) => {

  const styles = {
    primary: `bg-damask-500 text-damask-100 hover:bg-damask-600`,
    secondary: `text-damask-800 ${active ? "bg-damask-300 hover:bg-damask-500" : "bg-damask-300/10"}`,
  }

  return (
    <button 
      type={type} 
      className={`rounded-sm py-3 uppercase w-full ${styles[style]} ${className}`}
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