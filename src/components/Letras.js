export default function Letras(props) {
    
    return (
        <>
            <div className="letrasbtn">
                {props.alfabeto.map((letra, index) =>
                    <button data-test="letter" key={index} disabled={false}>
                        {letra.toUpperCase()}
                </button> )}
        </div>
        </>

)

}