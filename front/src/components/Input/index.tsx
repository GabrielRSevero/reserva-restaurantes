import { ReactNode } from "react"
import { Box } from "../Box"
import ReactInputMask from "react-input-mask"

interface IInput {
  pre?: ReactNode
  label?: string
  name?: string
  placeholder?: string
  value?: string | number
  type?: "text" | "number" | "tel"
  mask?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ pre, label, name, placeholder, value, type = "text", onChange, mask, ...props }: IInput) => {
  return (
    <Box>
      {label && (
        <label htmlFor={name} className="text-white">{label}:</label>
      )}

      <Box className="flex">
        {pre && (
          <Box className="flex justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600 w-14 rounded-bl-md rounded-tl-md">
            {pre}
          </Box>
        )}
        {mask ? (
          <ReactInputMask mask={mask} value={value} onChange={onChange}>
            {(inputProps) => (
              <input
                id={name}
                type={type}
                className={`p-2 outline-none bg-white/20 placeholder:text-white w-full ${pre ? "rounded-br-md rounded-tr-md" : "rounded-md"}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...inputProps}
                disableUnderline
                {...props}
              />
            )}
          </ReactInputMask>
        ) : (
          <input
            id={name}
            type={type}
            className={`p-2 outline-none bg-white/20 placeholder:text-white w-full ${pre ? "rounded-br-md rounded-tr-md" : "rounded-md"}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
          />
        )}
      </Box>
    </Box>
  )
}