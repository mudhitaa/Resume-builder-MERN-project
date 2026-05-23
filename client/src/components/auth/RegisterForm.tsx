import { useForm } from "react-hook-form";
import { FormActionButton } from "../../from/Button";
import { type IRegisterFormData } from "../../types/AuthTypes";
import { AuthInput } from "../../from/AuthInput";
import { RegisterDefaultValues, registerDTO } from "../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosInstance from "../../config/axiosConfig";
import { toast } from "sonner";
import { useNavigate } from "react-router";


export default function RegisterForm() { 

    const{handleSubmit,control,formState:{errors}}= useForm<IRegisterFormData>({
        defaultValues:RegisterDefaultValues,
        resolver: zodResolver(registerDTO)
    })

    const navigate = useNavigate()

        const handleRegisterSubmit = async (data:IRegisterFormData) => {
            try{  
            const response =  await axiosInstance.post('/auth/register', 
                {...data, expiresInMins:180},
            )
            toast.success("registration success")
            console.log(response)
            navigate('/login')

        
            }catch{
                toast.error("registration error")
            }
    }

    return(<>
        
         <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(handleRegisterSubmit)}>
            <AuthInput
                type="text"
                name="username"
                placeholder="Username"
                handler={control}
                errMsg={errors?.username?.message}
            />
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
            <AuthInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                handler={control}
                errMsg={errors?.confirmPassword?.message}
            />
            <FormActionButton submitBtnTxt="Register" type="submit"/>
        </form>
    </>)
        }