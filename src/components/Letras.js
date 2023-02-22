export default function Letras(props) {
    let ListaLetras = props.ListaLetras

    return <>
        <div className="letrasbtn">
            {props.alfabeto.map((letra, index) =>
                <button data-test="letter"
                    key={letra}
                    disabled={ListaLetras.includes(letra)|| props.Pause}
                    onClick={() => props.chooseLetter(letra)} 
                >
                    {letra.toUpperCase()}
            </button> )}
    </div>
    </>;
}