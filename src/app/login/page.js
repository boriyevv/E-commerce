'use client'

import InputComponent from "@/components/FormElements/InputComponent"
import { loginFormControls, registrationFormControls } from "@/utils"
import { useRouter } from "next/navigation"


export default function Login() {

const router = useRouter()


    return (
        <div className="bg-white relative mt-5">
            <div className="flex flex-col items-center justify-beetwen pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto  xl:px-5 lg:flex-row">
                <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row ">
                    <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
                        <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                            <p className="w-full text-4xl font-medium text-center font-serif text-black">
                                Login
                            </p>

                            <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                {
                                    loginFormControls.map(controlItem =>

                                        controlItem.componentType === 'input' ?
                                            <InputComponent
                                                key={controlItem.id}
                                                type={controlItem.type}
                                                placeholder={controlItem.placeholder}
                                                label={controlItem.lebel}
                                            />

                                            : null
                                    )}
                                <button className="mt-1.5 w-full inline-block bg-black text-white px-5 py-5 rounded text-xs font-medium uppercase tracking-wide text-wide">Login</button>
                                <div className="flex flex-col gap-2 text-black">
                                    <p>New to website ?</p>
                                <button onClick={()=>router.push('/register')} className="mt-1.5 w-full inline-block bg-black text-white px-5 py-5 rounded text-xs font-medium uppercase tracking-wide text-wide">Register</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}