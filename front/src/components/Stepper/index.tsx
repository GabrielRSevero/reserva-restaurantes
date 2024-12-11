import { ReactNode } from "react"
import { Box } from "../Box"

interface IStep {
  name: string
  details?: string
  element?: ReactNode
  onClick?: () => void
}

interface IStepper {
  steps: IStep[]
  currentStep?: number
}

export const Stepper = ({ steps, currentStep = 1 }: IStepper) => {
  return (
    <Box className="border border-damask-200 rounded-sm">
      <ol className="items-center flex gap-2 bg-damask-100 p-2 w-full sm:flex">
        {steps.map((step: IStep, key: number) => (
          <li 
            key={key} 
            className={`flex items-center space-x-2.5 rtl:space-x-reverse px-6 rounded-sm py-4 cursor-pointer border border-damask-200 ${currentStep === key + 1 ? "bg-damask-500 text-damask-50" : "bg-damask-100 text-damask-700 hover:bg-damask-200"}`} 
            onClick={step.onClick}>
            <span className="flex items-center justify-center w-8 h-8 border border-damask-700 rounded-full shrink-0">{key + 1}</span>
            <span>
              <h3 className="font-medium leading-tight">{step.name}</h3>
              <p className="text-sm">{step.details}</p>
            </span>
          </li>
        ))}
      </ol>

      <Box>
        {steps.find((_, key: number) => key + 1 === currentStep)?.element}
      </Box>
    </Box>
  )
}