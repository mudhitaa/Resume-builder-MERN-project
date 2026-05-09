import { useForm } from "react-hook-form";
import { FormActionButton } from "../../from/Button";
import { LoginDefaultValues, type Icredientials } from "../../types/AuthTypes";
import { useNavigate } from "react-router";
import { AuthInput } from "../../from/AuthInput";
import { loginDTO } from "../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
//import Cookies from "js-cookie";



export default function LoginForm() { 

    const navigate = useNavigate()
    const {handleSubmit,control,formState:{errors}}= useForm<Icredientials>({
        defaultValues:LoginDefaultValues,
        resolver: zodResolver(loginDTO)
    })

    const handleLoginSubmit = (data:Icredientials) => {
        // TEMPORARY FRONTEND AUTH
        console.log("Login data:", data);
        navigate("/resume-builder");
        // this gets response from backend
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
    