import { type IFormInput , type IFormLable, type IFormSelectProps, type ISingleOption } from "../types/InputTypes"

export const FormInput =({type,name,placeholder, handler}:Readonly<IFormInput>)=>{
    return(
       <>
       <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handler}
                className="p-2 border rounded  focus:outline-blue-800"
            />
       </>
    )
}


export const FormLable =({htmlFor,children}:Readonly<IFormLable>)=>{
    return(
    <>
    <label htmlFor={htmlFor}>{children}</label>
    </>
    )
}



export const FormSelect =({name,handler,options}:Readonly<IFormSelectProps>)=>{
    return(
       <>
                return(
                    <>
                    <select 
                    id={name}
                    name={name}
                    onChange={handler}
                    className="border p-2 border-pink-400 bg-pink-50 w-full rounded-md">

                        <option value="">--select any one--</option>
                        {options && options.map((val:ISingleOption, ind:number)=>{
                            return <option key={ind} value = {val.value}>
                                    {val.label}
                            </option>
                        })}  

                    
                    </select>
                    
                    </>
                    
                )
             
       </>
    )
}

export const FormTextArea =()=>{
    return(
       <>
           
       </>
    )
}


export const FormFileInput =()=>{
    
    return(
       <>
            
       </>
    )
}




