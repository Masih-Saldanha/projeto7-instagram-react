import Acoes from "./Acoes";

export default function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imagemUsuario} />
                {props.nomeUsuario}
            </div>
            <Acoes />
        </div>
    )
}