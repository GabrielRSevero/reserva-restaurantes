import { Form, Formik } from "formik";
import { useState } from "react";
import { Stepper, Box } from "~/components";
import { SendCode } from "./SendCode";
import { ValidateCode } from "./ValidateCode";
import { AccountInfo } from "./AccountInfo";
import api from "~/services/api";
import { useNavigate } from "react-router-dom";

export interface IFormValues {
  phoneNumber: string
  code: string
  userName: string
  userId: string
}

const Login = () => {
  const navigate = useNavigate()

  const [currentStep, setCurrentStep] = useState(1)

  const [user, setUser] = useState<any>(null)

  const initialValues: IFormValues = {
    phoneNumber: "",
    code: "",
    userName: "",
    userId: "",
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

    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(response.data?.return?.user))
      localStorage.setItem("authToken", response.data?.return?.token)

      return response.data.return?.user
    }
  }

  const updateAccountInfo = async (phone: string, name: string, id: string) => {
    const response = await api.post(`/users/${id}`, {
      name: name,
      phone_number: phone
    })

    if (response.status === 200) {
      navigate("/")
    }
  }

  const handleSubmit = async (values: IFormValues, setFieldValue: (field: string, value: any) => void) => {
    if (currentStep === 1) {
      await sendCode(values.phoneNumber)

      setCurrentStep(currentStep + 1);
      return;
    }

    if (currentStep === 2) {
      const user = await validateCode(values.phoneNumber, values.code)

      setFieldValue("userName", user?.name)
      setFieldValue("userId", user?.id)

      setCurrentStep(currentStep + 1);
      return;
    }

    if (currentStep === 3) {
      await updateAccountInfo(values.phoneNumber, values.userName, values.userId)

      setCurrentStep(currentStep + 1);
      return;
    }
  }

  return (
    <Box className="h-full flex justify-center items-center bg-gradient-to-r from-pink-500 to-rose-500">
      <Box className="flex flex-col gap-4">
        <Formik initialValues={initialValues}  onSubmit={(values, { setFieldValue }) => handleSubmit(values, setFieldValue)}>
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