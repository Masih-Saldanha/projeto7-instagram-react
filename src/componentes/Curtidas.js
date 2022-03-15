import TextoCurtido from "./TextoCurtido";

export default function Curtidas(props) {
    return (
        <div className="curtidas">
            <img src={props.imagemCurtidoPor} />
            <TextoCurtido nomeCurtidoPor={props.nomeCurtidoPor} curtidoPorTantos={props.curtidoPorTantos} />
        </div>
    )
}