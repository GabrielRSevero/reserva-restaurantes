import { Form, Formik } from "formik";
import { RiSmartphoneLine } from "react-icons/ri";
import { useState } from "react";
import { Stepper, Button } from "~/components";
import axios from "axios";

const Login = () => {

  const initialValues = {
    phoneNumber: "",
    code: "",
    userName: "",
  }

  const [currentStep, setCurrentStep] = useState(1) 

  const sendCode = async (phone: string) => {
    const response = await axios.post("http://localhost:8000/api/requestVerificationCode", {
      phone_number: `+55${phone}`
    });
  }

  const validateCode = async (phone: string, code: string) => {
    const response = await axios.post("http://localhost:8000/api/confirmVerificationCode", {
      phone_number: `+55${phone}`,
      code: code,
    });
  }

  const handleSubmit = async (values: any) => {
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
      alert("Fazer request para atualizar dados do usuário")

      setCurrentStep(currentStep + 1);
      return;
    }
  }

  return (
    <div className="h-full flex justify-center items-center bg-gradient-to-r from-pink-500 to-rose-500">
      <div className="flex flex-col gap-4">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({values, isSubmitting, handleChange}) => (
              <Form>
                <Stepper currentStep={currentStep} steps={
                  [
                    { 
                      name: "Entrar com telefone",
                      details: "Enviar código por SMS",
                      element: (
                        <div className="flex flex-col gap-4">
                          <h1 className="text-stone-100 text-2xl text-center">Entrar com número de telefone</h1>

                          <div className="flex">
                            <div className="flex justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600 w-14 rounded-bl-md rounded-tl-md">
                              <RiSmartphoneLine className="w-7 h-7 text-white" />
                            </div>
                            <input 
                              className="p-2 outline-none bg-white/20 placeholder:text-white w-full rounded-br-md rounded-tr-md"
                              type="tel"
                              placeholder="(00) 00000-0000"
                              value={values.phoneNumber}
                              onChange={handleChange("phoneNumber")}
                            />
                          </div>
                          <Button type="submit" loading={isSubmitting}>Enviar código</Button>
                        </div>
                      )
                    },
                    { 
                      name: "Validar código",
                      details: "Validar código",
                      element: (
                        <div className="flex flex-col gap-4">
                          <h1 className="text-stone-100 text-2xl text-center">Informar código</h1>

                          <div className="flex">
                            <input 
                              className="p-2 outline-none bg-white/20 placeholder:text-white w-full rounded-md"
                              type="text"
                              placeholder="XXXXXX"
                              value={values.code}
                              onChange={handleChange("code")}
                            />
                          </div>
                          <Button type="submit" loading={isSubmitting}>Validar código</Button>
                        </div>
                      )
                    },
                    { 
                      name: "Informações da conta",
                      details: "Alterar informações",
                      element: (
                        <div className="flex flex-col gap-4">
                          <h1 className="text-stone-100 text-2xl text-center">Suas informações</h1>

                          <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="text-white">Nome de usuário:</label>
                            <input
                              className="p-2 outline-none bg-white/20 placeholder:text-white w-full rounded-md"
                              type="text"
                              id="name"
                              placeholder="Informe seu nome"
                              value={values.userName}
                              onChange={handleChange("userName")}
                            />
                          </div>
                          <Button type="submit" loading={isSubmitting}>Salvar e continuar</Button>
                        </div>
                      )
                    }
                  ]} 
                />
              </Form>
            )}
          </Formik>
      </div>
    </div>
  )
}

export default Login;