import Texto from "./Texto";

export default function Usuario(props) {
    const {imagem, nomeDeUsuario, nomeReal} = props;
    return (
        <div className="usuario">
            <img src={imagem} />
            <Texto nomeDeUsuario={nomeDeUsuario} nomeReal={nomeReal} />
        </div>
    )
}