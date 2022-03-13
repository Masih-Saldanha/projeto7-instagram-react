import AcoesFundo from "./AcoesFundo";
import Curtidas from "./Curtidas";

export default function Fundo(props) {
    return (
        <div class="fundo">
            <AcoesFundo />
            <Curtidas imagemCurtidoPor={props.imagemCurtidoPor} nomeCurtidoPor={props.nomeCurtidoPor} curtidoPorTantos={props.curtidoPorTantos} />
        </div>
    )
}