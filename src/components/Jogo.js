
export default function Jogo(props) {
    

    return (
        <div className="Topo">            
            <img className="forca" src={props.image} alt={props.image} />
            <div className="chooseword">
                <button data-test="choose-word">Escolher palavra</button>
            </div>
        </div>

    )
}