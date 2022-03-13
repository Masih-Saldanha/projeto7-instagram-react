export default function Texto(props) {
    return (
        <div class="texto">
            <strong>{props.nomeDeUsuario}</strong>
            {props.nomeReal}
        </div>
    )
}