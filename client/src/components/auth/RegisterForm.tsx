import { useForm } from "react-hook-form";

import { FormActionButton } from "../../from/Button";
import { type IRegisterFormData } from "../../types/AuthTypes";
import { AuthInput } from "../../from/AuthInput";

export default function RegisterForm() { 
    const{handleSubmit,control}= useForm<IRegisterFormData>({
        defaultValues:{
            name:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    })

        const handleRegisterSubmit = (data:IRegisterFormData) => {
        // TEMPORARY FRONTEND REGISTER LOGIC
        console.log("Registration data:", data);
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
    }

    return(<>
        
         <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(handleRegisterSubmit)}>
            <AuthInput
                type="text"
                name="name"
                placeholder="Name"
                handler={control}
                errMsg={""}
            />
            <AuthInput
                type="email"
                name="email"
                placeholder="Email"
                handler={control}
                errMsg={""}
            />
            <AuthInput
                type="password"
                name="password"
                placeholder="Password"
                handler={control}
                errMsg={""}
            />
            <AuthInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                handler={control}
                errMsg={""}
            />
            <FormActionButton submitBtnTxt="Register" />
        </form>
    </>)
        }