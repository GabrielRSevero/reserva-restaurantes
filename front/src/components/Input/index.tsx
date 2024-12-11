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
        <label htmlFor={name} className="text-damask-500">{label}:</label>
      )}

      <Box className="flex">
        {pre && (
          <Box className="flex justify-center items-center bg-damask-500 w-14">
            {pre}
          </Box>
        )}
        {mask ? (
          <ReactInputMask mask={mask} value={value} onChange={onChange}>
            {(inputProps) => (
              <input
                id={name}
                type={type}
                className={`p-2 outline-none bg-damask-500 placeholder:text-damask-600 w-full`}
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
            className={`p-2 outline-none bg-damask-100 placeholder:text-damask-600 w-full`}
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