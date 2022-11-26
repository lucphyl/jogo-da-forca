

export default function Letras (props) {
    return(
        <div className="container-letras">
            {props.alfabeto.map((letra)=> (
            <button 
                data-test="letter"
                onClick={() => props.clickLetter(letra)}
                key={letra}
                disabled={props.letter.includes(letra)}
            >
                {letra}
            </button>
            ))}
      </div>
    )
}