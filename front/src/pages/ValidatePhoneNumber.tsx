import { Form, Formik } from "formik";
import { RiSmartphoneLine } from "react-icons/ri";
import { Stepper } from "../components";
import { useState } from "react";

const ValidatePhoneNumber = () => {

  const initialValues = {
    phoneNumber: ""
  }

  const [currentStep, setCurrentStep] = useState(1) 

  const handleSubmit = (values: any) => {
    if (currentStep < 3) {
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
                              className="p-2 outline-none bg-white w-full rounded-br-md rounded-tr-md"
                              type="tel"
                              placeholder="(00) 00000-0000"
                              value={values.phoneNumber}
                              onChange={handleChange("phoneNumber")}
                            />
                          </div>
                          <button type="submit" className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md py-3 text-white">ENVIAR CÓDIGO SMS</button>
                        </div>
                      )
                    },
                    { 
                      name: "Validar código",
                      details: "Validar código",
                      element: (
                        <div>
                          <button type="submit" className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md py-3 text-white">VALIDAR CÓDIGO SMS</button>
                        </div>
                      )
                    },
                    { 
                      name: "Informações da conta",
                      details: "Alterar informações",
                      element: (
                        <div>
                          <button type="submit" className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md py-3 text-white">REALIZAR RESERVA</button>
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

export default ValidatePhoneNumber;