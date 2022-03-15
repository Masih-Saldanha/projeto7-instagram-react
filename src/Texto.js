export default function Texto(props) {
    return (
        <div className="texto">
            <strong>{props.nomeDeUsuario}</strong>
            {props.nomeReal}
        </div>
    )
}