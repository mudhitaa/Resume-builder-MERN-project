import { useForm } from "react-hook-form";
import { FormActionButton } from "../../from/Button";
import { LoginDefaultValues, type Icredientials } from "../../types/AuthTypes";
import { AuthInput } from "../../from/AuthInput";
import { loginDTO } from "../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "sonner";

export default  function LoginForm() { 

    const navigate= useNavigate()
    const {loginuser}= useAuth()

    const {handleSubmit,control,formState:{errors}}= useForm<Icredientials>({
        defaultValues:LoginDefaultValues,
        resolver: zodResolver(loginDTO)
    })
    
    const handleLoginSubmit = async (data:Icredientials) => {
            try{  
                const userDetail = await loginuser(data)
                navigate("/resume-builder")
                console.log(userDetail)
            }catch(exeception){
                toast.error("login error")
            }
    }

    
    return(<>
        
         <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(handleLoginSubmit)}>
            <AuthInput
                type="text"
                name="username"
                placeholder="Username"
                handler={control}
                errMsg={errors?.username?.message}
            />
            <AuthInput
                type="password"
                name="password"
                placeholder="Password"
                handler={control}
                errMsg={errors?.password?.message}
            />
            <FormActionButton submitBtnTxt="Login" type="submit" />
        </form>
    </>)
    }
    