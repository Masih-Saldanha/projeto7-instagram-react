import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Fundo from "./Fundo";

export default function Post(props) {
    return (
        <div class="post">
            <Topo imagemUsuario={props.imagemUsuario} nomeUsuario={props.nomeUsuario} />
            <Conteudo imagemPost={props.imagemPost} />
            <Fundo imagemCurtidoPor={props.imagemCurtidoPor} nomeCurtidoPor={props.nomeCurtidoPor} curtidoPorTantos={props.curtidoPorTantos} />
        </div>
    )
}