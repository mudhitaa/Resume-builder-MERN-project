import type { ReactNode } from "react"

interface IFormActionButtonProps{
    submitBtnTxt:ReactNode,
    className?: string,
    onClick?: () => void
    type?:"button"|"submit"
}
interface IAddButtonProps{
    onClick: () => void,
    type?: string,
    className?: string
}

export const FormActionButton = ({
    submitBtnTxt = "Submit",
    className = "",onClick,type="button"
}: Readonly<IFormActionButtonProps>) => {
    return (
        <button
            type={type}
            className={`
                w-full
                px-5 py-3
                hover:cursor-pointer
                bg-blue-900
                rounded-md
                text-white
                transition
                hover:scale-[0.98]
                ${className}
            `}
            onClick={onClick}
        >
            {submitBtnTxt}
        </button>
    );
};

export const AddButton =({onClick,type,className}:Readonly<IAddButtonProps>)=>{
    return(<>
    <button
                    type="button"
                    onClick={onClick}
                    className={`bg-blue-100  text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition cursor-pointer ${className}`}
                >
                    + Add {type}
                </button>
    </>)
}


export const RemoveButton =({onClick,className}:Readonly<IAddButtonProps>)=>{
    return(<>
    <button
                    type="button"
                    onClick={onClick}
                    className={`text-red-500 hover:text-red-700 cursor-pointer  ${className}`}
                >
                    Remove 
                </button>
    </>)}