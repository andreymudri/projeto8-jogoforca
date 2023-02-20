
export default function Jogo(props) {
    

    return (
        <div className="Topo">            
            <img className="forca" src={props.image} alt={props.image} data-test="game-image"/>
            <div className="chooseword">
                <button data-test="choose-word" onClick={props.chooseWord}>Escolher palavra</button>


                <div className="palavra">{props.palavra}</div>
            </div>
        </div>

    )
}