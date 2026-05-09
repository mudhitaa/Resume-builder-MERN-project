import { useForm } from "react-hook-form";
import { FormActionButton } from "../../from/Button";
import { LoginDefaultValues, type Icredientials } from "../../types/AuthTypes";
import { useNavigate } from "react-router";
import { AuthInput } from "../../from/AuthInput";
import { loginDTO } from "../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";



export default function LoginForm() { 

    const navigate = useNavigate()
    const {handleSubmit,control,formState:{errors}}= useForm<Icredientials>({
        defaultValues:LoginDefaultValues,
        resolver: zodResolver(loginDTO)
    })

    const handleLoginSubmit = (data:Icredientials) => {
        // TEMPORARY FRONTEND AUTH
        console.log("Login data:", data);
        if (
            data.email === "admin@admin.com" &&
            data.password === "admin"
        ) {
            navigate("/resume-builder");
        } else {
            alert("Invalid credentials");
        }
    };
    
    return(<>
        
         <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(handleLoginSubmit)}>
            <AuthInput
                type="email"
                name="email"
                placeholder="Email"
                handler={control}
                errMsg={errors?.email?.message}
            />
            <AuthInput
                type="password"
                name="password"
                placeholder="Password"
                handler={control}
                errMsg={errors?.password?.message}
            />
            <FormActionButton submitBtnTxt="Login" />
        </form>
    </>)
    }
    