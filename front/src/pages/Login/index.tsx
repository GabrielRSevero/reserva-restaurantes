import { Form, Formik } from "formik";
import { useState } from "react";
import { Stepper, Box } from "~/components";
import { SendCode } from "./SendCode";
import { ValidateCode } from "./ValidateCode";
import { AccountInfo } from "./AccountInfo";
import api from "~/services/api";

export interface IFormValues {
  phoneNumber: string
  code: string
  userName: string
}

const Login = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const [user, setUser] = useState<any>(null)

  const initialValues: IFormValues = {
    phoneNumber: "",
    code: "",
    userName: user?.name || "",
  }

  const sendCode = async (phone: string) => {
    const response = await api.post("/requestVerificationCode", {
      phone_number: phone
    });
  }

  const validateCode = async (phone: string, code: string) => {
    const response = await api.post("/confirmVerificationCode", {
      phone_number: phone,
      code: code,
    });

    setUser(response.data.return?.user) 
    // Obter token no retorno da request e guardar;
  }

  const updateAccountInfo = async (phone: string, name: string) => {
    const response = await api.post(`/users/${user?.id}`, {
      name: name,
      phone_number: phone
    })
  }

  const handleSubmit = async (values: IFormValues) => {
    if (currentStep === 1) {
      await sendCode(values.phoneNumber)

      setCurrentStep(currentStep + 1);
      return;
    }

    if (currentStep === 2) {
      await validateCode(values.phoneNumber, values.code)

      setCurrentStep(currentStep + 1);
      return;
    }

    if (currentStep === 3) {
      await updateAccountInfo(values.phoneNumber, values.userName)

      setCurrentStep(currentStep + 1);
      return;
    }
  }

  return (
    <Box className="h-full flex justify-center items-center bg-gradient-to-r from-pink-500 to-rose-500">
      <Box className="flex flex-col gap-4">
        <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Stepper currentStep={currentStep} steps={
              [
                { 
                  name: "Entrar com telefone",
                  details: "Enviar código por SMS",
                  element: <SendCode />
                },
                { 
                  name: "Validar código",
                  details: "Validar código",
                  element: <ValidateCode />
                },
                { 
                  name: "Informações da conta",
                  details: "Alterar informações",
                  element: <AccountInfo />
                }
              ]} 
            />
          </Form>
        </Formik>
      </Box>
    </Box>
  )
}

export default Login;