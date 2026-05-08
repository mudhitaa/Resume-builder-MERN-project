import { type IFormInput , type IFormLable, type IFormSelectProps, type IFormTextArea, type ISingleOption } from "../types/InputTypes"

export const FormInput =({type,name,placeholder, handler, value}:Readonly<IFormInput>)=>{
    return(
       <>
       <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handler}
                className="p-2 border rounded  focus:outline-blue-800"
                value={value}
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



export const FormSelect =({name,handler,options,value}:Readonly<IFormSelectProps>)=>{
    return(
       <>
                    <>
                    <select 
                    id={name}
                    name={name}
                    onChange={handler}
                    className="border p-2 m-1 w-full rounded-md focus:outline-blue-800"
                    value={value}>

                        <option value="">--select any one--</option>
                        {options && options.map((val:ISingleOption, ind:number)=>{
                            return (
                                <option key={ind} value = {val.value}>
                                    {val.label}
                                </option>
                            )
                        })}  

                    
                    </select>
                    
                    </>
                            
             
       </>
    )
}

export const FormTextArea =({name,placeholder,handler,value}:Readonly<IFormTextArea>)=>{
    return(
       <>
           <textarea
                        name={name}
                        placeholder={placeholder}
                        onChange={handler}
                        className="border rounded-lg p-2 focus:outline-blue-800  w-full"
                        value={value}
                    />
       </>
    )
}


export const FormFileInput =()=>{
    
    return(
       <>
            
       </>
    )
}




