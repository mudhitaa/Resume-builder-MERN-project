import type { ReactNode } from "react"

interface IFormActionButtonProps{
    submitBtnTxt?:ReactNode,
    disabled?:boolean
}

export const FormActionButton = ({submitBtnTxt='Submit', disabled=false}:Readonly<IFormActionButtonProps>)=>{
    return(
        <>
        <button disabled={disabled}></button>
        <button type="submit" className="w-full h-10 hover:cursor-pointer bg-blue-900 rounded-md text-white transition hover:scale-98  disabled:bg-red-800/4 disabled:cursor-not-allowed">{submitBtnTxt}</button>
        </>
    )
}