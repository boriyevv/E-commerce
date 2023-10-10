'use client'

import InputComponent from "@/components/FormElements/InputComponent"
import SelectComponent from "@/components/FormElements/SelectComponent"
import Notification from "@/components/notification"
import { GlobalContext } from "@/context"
import { registerNewUser } from "@/services/register"
import { registrationFormControls } from "@/utils"
import { useContext } from "react"
import { useState } from "react"


// const isRegistered = false

const initialFormData = {
    name: '',
    email: '',
    password: '',
    role: 'customer'

}

export default function Register() {

    const [formData, setFormData] = useState(initialFormData)
    const [isRegistered, setIsRegistered] = useState(false)
    // const [commonLoader, setCommonLoader] = useContext(GlobalContext)

    console.log(formData)

    function isFormValid() {
        return formData && formData.name && formData.name.trim() !== ''
            && formData && formData.email && formData.email.trim() !== ''
            && formData && formData.password && formData.password.trim() !== '' ? true : false
    }
    console.log(isFormValid())

    async function handleRegisterOnSubmit() {
        // setCommonLoader(true)
        const data = await registerNewUser(formData)

        if (data.success) {
            setIsRegistered(true)
            // setCommonLoader(false)
            setFormData(initialFormData)
        } 
        else {
            // setCommonLoader(false)
            setFormData(initialFormData)
        }

        console.log(data)

    }




    return (
        <div className="bg-white relative mt-5">
            <div className="flex flex-col items-center justify-beetwen pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto  xl:px-5 lg:flex-row">
                <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row ">
                    <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
                        <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                            <p className="w-full text-4xl font-medium text-center font-serif text-black">
                                {
                                    isRegistered ? "Registration Successfull !" : "Sign up for account"
                                }
                            </p>
                            {
                                isRegistered ? <button className="inline-flex w-full item-center justify-center bg-black px-6 py-4 text-lg  text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide">
                                    Login</button> :
                                    <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                        {
                                            registrationFormControls.map(controlItem =>

                                                controlItem.componentType === 'input' ?
                                                    <InputComponent
                                                        key={controlItem.id}
                                                        type={controlItem.type}
                                                        placeholder={controlItem.placeholder}
                                                        label={controlItem.lebel}
                                                        onChange={(event) => {
                                                            setFormData({
                                                                ...formData,
                                                                [controlItem.id]: event.target.value
                                                            })
                                                        }}
                                                        value={formData[controlItem.id]}
                                                    />
                                                    : controlItem.componentType === 'select' ?
                                                        <SelectComponent
                                                            key={controlItem.id}
                                                            options={controlItem.options}
                                                            label={controlItem.lebel}
                                                            onChange={(event) => {
                                                                setFormData({
                                                                    ...formData,
                                                                    [controlItem.id]: event.target.value
                                                                })
                                                            }}
                                                            value={formData[controlItem.id]}
                                                        />
                                                        : null
                                            )}
                                        <button onClick={handleRegisterOnSubmit} className=" disabled:opacity-50 mt-1.5 w-full inline-block bg-black text-white px-5 py-5 rounded text-xs font-medium uppercase tracking-wide text-wide " disabled={!isFormValid()}>Register</button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Notification />
        </div>
    )


}




