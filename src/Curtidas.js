import TextoCurtido from "./TextoCurtido";

export default function Curtidas(props) {
    return (
        <div class="curtidas">
            <img src={props.imagemCurtidoPor} />
            <TextoCurtido nomeCurtidoPor={props.nomeCurtidoPor} curtidoPorTantos={props.curtidoPorTantos} />
        </div>
    )
}