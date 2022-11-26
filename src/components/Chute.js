export default function Chute (props) {
    return(
        <div className="container-input">
            <span>já sei a palavra !      </span>
            <input data-test="guess-input"disabled={props.disableInput} onChange={(e)=> props.setpalpite(e.target.value)} value={props.palpite}></input>
            <button data-test="guess-button"onClick={props.MakeGuess}>chutar</button>
      </div>
    )
}