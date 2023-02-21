
export default function Jogo(props) {
    const palavra = props.palavra.split("")

    return (
        <div className="Topo">            
            <img className="forca" src={props.image} alt={props.image} data-test="game-image"/>
            <div className="chooseword">
                <button data-test="choose-word" onClick={props.ChooseWord}>Escolher palavra</button>

                <div className="palavra">{palavra.map((letra) => props.ListaLetras.indexOf(letra) !== -1  ? letra : "_" )}</div>
            </div>
        </div>

    )
}