
export default function Jogo(props) {
    const palavra = props.palavra.split("")

    let wordStyle = {};
    if (props.GameResult === "won") {
      wordStyle.color = "green";
    } else if (props.GameResult === "lost") {
      wordStyle.color = "red";
    }

    return (
        <div className="Topo">            
            <img className="forca" src={props.image} alt={props.image} data-test="game-image"/>
            <div className="chooseword">
                <button data-test="choose-word" onClick={props.ChooseWord}>Escolher palavra</button>
{props.GameResult === "" &&
                <div className="palavra" data-test="word" style={wordStyle}>{palavra.map((letra) => props.ListaLetras.indexOf(letra) !== -1 ? letra : "_")}</div>}
                {props.GameResult !== "" &&<>
                    <div className="palavra" data-test="word" style={wordStyle}>{palavra}</div>
                    <div className="game-result" style={wordStyle}>
                        {props.GameResult === "won" ? "Você venceu!" : "Você perdeu!"}
                    </div></>}
            </div>
        </div>

    )
}