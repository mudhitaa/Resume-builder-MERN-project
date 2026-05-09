import { useController } from "react-hook-form";


export interface IAuthInput{
    type:string;
    name:string;
    placeholder:string;
    handler?: any;
    value?: string;
    errMsg?:string;
}
export const AuthInput =({type,name,placeholder,handler,errMsg=''}:Readonly<IAuthInput>)=>{
    
    const{field}= useController({
        name:name,
        defaultValue:"",
        control:handler,
    })
    
    return(
       <>
             <input 
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    {...field}
                    className="p-2 border rounded  focus:outline-blue-800" />
                    <span className="text-red-600 italic text-sm hidden">{errMsg}</span>
       </>
    )
}