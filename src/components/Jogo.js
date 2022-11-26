

export default function Jogo (props) {
    return(
        <div className="container-forca">
            <img data-test="game-image" src={props.imagens[props.error]} alt="imagem da forca"></img>
            <button data-test="choose-word" onClick={props.startGame}>Escolher palavra</button>
            <h1 data-test="word" className={props.colorWord}>{props.gameWord}</h1>
      </div>
    )
}