import Texto from "./Texto";

export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.imagem} />
            <Texto nomeDeUsuario={props.nomeDeUsuario} nomeReal={props.nomeReal} />
        </div>
    )
}