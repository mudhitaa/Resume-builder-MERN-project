import { useState, type ChangeEvent } from "react"
import { FormInput } from "../../from/Input";
import { FormActionButton } from "../../from/Button";
import { type IRegisterFormData } from "../../types/AuthTypes";

export default function RegisterForm() { 
    const [credientials,setCredientials]= useState<IRegisterFormData>({ 
        name:"",
        email:"", 
        password:"",
        confirmPassword:"" })

    const handleInputChange =(ev:ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
    >)=>{
                    const name =ev.target.name
                    setCredientials({
                        ...credientials,
                        [name]:ev.target.value
                    })
                }

    return(<>
        
         <form className="flex flex-col gap-4 p-4">
            <FormInput
                type="text"
                name="name"
                placeholder="Name"
                handler={handleInputChange}
                value={credientials.name}
            />
            <FormInput
                type="email"
                name="email"
                placeholder="Email"
                handler={handleInputChange}
                value={credientials.email}
            />
            <FormInput
                type="password"
                name="password"
                placeholder="Password"
                handler={handleInputChange}
                value={credientials.password}
            />
            <FormInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                handler={handleInputChange}
                value={credientials.confirmPassword}
            />
            <FormActionButton submitBtnTxt="Register" />
        </form>
    </>)
    }
    