export default function Letras(props) {
    
    return (
        <>
            <div className="letrasbtn">
                {props.alfabeto.map((letra, index) =>
                    <button data-test="letter"
                        key={letra}
                        disabled={false}
                        onClick={props.chooseLetter}    
                    >
                        {letra.toUpperCase()}
                </button> )}
        </div>
        </>

)

}