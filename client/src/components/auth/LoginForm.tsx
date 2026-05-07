import {  useState, type BaseSyntheticEvent } from "react"
import { FormInput } from "../../from/Input";
import { FormActionButton } from "../../from/Button";
import { type Icredientials } from "../../types/AuthTypes";
import { useNavigate } from "react-router";

export default function LoginForm() { 

    const navigate = useNavigate()
    const [credientials,setCredientials]= useState<Icredientials>({ 
        email:"", 
        password:"" })

    const handleInputChange =(ev:BaseSyntheticEvent)=>{
                    const name =ev.target.name
                    setCredientials({
                        ...credientials,
                        [name]:ev.target.value
                    })
                }

    const handleLogin = (ev: BaseSyntheticEvent) => {
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
            />
            <FormInput
                type="password"
                name="password"
                placeholder="Password"
                handler={handleInputChange}
            />
            <FormActionButton submitBtnTxt="Login" />
        </form>
    </>)
    }
    