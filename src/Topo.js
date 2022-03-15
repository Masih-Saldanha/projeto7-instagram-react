import Acoes from "./Acoes";

export default function Topo(props) {
    return (
        <div className="topo">
            <div className="usuario">
                <img src={props.imagemUsuario} />
                {props.nomeUsuario}
            </div>
            <Acoes />
        </div>
    )
}