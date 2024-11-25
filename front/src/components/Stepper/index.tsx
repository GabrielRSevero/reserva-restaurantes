import { ReactNode } from "react"
import { Box } from "../Box"

interface IStep {
  name: string
  details?: string
  element?: ReactNode
}

interface IStepper {
  steps: IStep[]
  currentStep?: number
}

export const Stepper = ({ steps, currentStep = 1 }: IStepper) => {
  return (
    <Box className="bg-white/10 rounded-md">
      <ol className="items-center w-full sm:flex">
        {steps.map((step: IStep, key: number) => (
          <li key={key} className={`flex items-center text-white space-x-2.5 rtl:space-x-reverse px-6 py-4 cursor-pointer ${currentStep === key + 1 ? "bg-gradient-to-r from-violet-600 to-indigo-600 rounded-tl-md" : "hover:bg-white/20"}`} onClick={() => console.log()}>
            <span className="flex items-center justify-center w-8 h-8 border border-white rounded-full shrink-0">{key + 1}</span>
            <span>
              <h3 className="font-medium leading-tight">{step.name}</h3>
              <p className="text-sm">{step.details}</p>
            </span>
          </li>
        ))}
      </ol>

      <Box className="p-10">
        {steps.find((_, key: number) => key + 1 === currentStep)?.element}
      </Box>
    </Box>
  )
}