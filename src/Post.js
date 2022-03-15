import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Fundo from "./Fundo";

export default function Post(props) {
    const {imagemUsuario, nomeUsuario, imagemPost, imagemCurtidoPor, nomeCurtidoPor, curtidoPorTantos} = props
    return (
        <div className="post">
            <Topo imagemUsuario={imagemUsuario} nomeUsuario={nomeUsuario} />
            <Conteudo imagemPost={imagemPost} />
            <Fundo imagemCurtidoPor={imagemCurtidoPor} nomeCurtidoPor={nomeCurtidoPor} curtidoPorTantos={curtidoPorTantos} />
        </div>
    )
}