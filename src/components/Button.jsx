export default function Button({
    children: texto = "texto do botão",
    FunctionClick = null,
    ClassStyle = ""
}){

    const ClickButton = () => {
        if(FunctionClick){
            FunctionClick()
        }
    }

    return (
        <button 
            className={ClassStyle}
            onClick={ClickButton}
        >
            {texto}
        </button>
    )
}