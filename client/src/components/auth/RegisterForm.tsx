import { useForm } from "react-hook-form";
import { FormActionButton } from "../../from/Button";
import { type IRegisterFormData } from "../../types/AuthTypes";
import { AuthInput } from "../../from/AuthInput";
import { RegisterDefaultValues, registerDTO } from "../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";



export default function RegisterForm() { 

    const{handleSubmit,control,formState:{errors}}= useForm<IRegisterFormData>({
        defaultValues:RegisterDefaultValues,
        resolver: zodResolver(registerDTO)
    })

        const handleRegisterSubmit = (data:IRegisterFormData) => {
        // TEMPORARY FRONTEND REGISTER LOGIC
        console.log("Registration data:", data);
    }

    return(<>
        
         <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(handleRegisterSubmit)}>
            <AuthInput
                type="text"
                name="name"
                placeholder="Name"
                handler={control}
                errMsg={errors?.name?.message}
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
            <FormActionButton submitBtnTxt="Register" />
        </form>
    </>)
        }