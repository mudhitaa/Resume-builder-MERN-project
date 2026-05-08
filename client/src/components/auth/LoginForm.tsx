import {  useState, type ChangeEvent } from "react"
import { FormInput } from "../../from/Input";
import { FormActionButton } from "../../from/Button";
import { type Icredientials } from "../../types/AuthTypes";
import { useNavigate } from "react-router";
import type { SyntheticEvent } from "react";
export default function LoginForm() { 

    const navigate = useNavigate()
    const [credientials,setCredientials]= useState<Icredientials>({ 
        email:"", 
        password:"" })

    const handleInputChange =(ev:ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
    >)=>{
                    const name =ev.target.name
                    setCredientials({
                        ...credientials,
                        [name]:ev.target.value
                    })
                }

    const handleLogin = (ev: SyntheticEvent<HTMLFormElement>) => {
        ev.preventDefault();

        // TEMPORARY FRONTEND AUTH
        if (
            credientials.email === "admin@admin.com" &&
            credientials.password === "admin"
        ) {
            navigate("/resume-builder");
        } else {
            alert("Invalid credentials");
        }
    };

    return(<>
        
         <form className="flex flex-col gap-4 p-4" onSubmit={handleLogin}>
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
            <FormActionButton submitBtnTxt="Login" />
        </form>
    </>)
    }
    