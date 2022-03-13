import Titulo from "./Titulo";
import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const sugestao = [
    <Sugestao imagem="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você" />,
    <Sugestao imagem="assets/img/chibirdart.svg" nome="chibirdart" razao="Segue você" />,
    <Sugestao imagem="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" razao="Novo no Instagram" />,
    <Sugestao imagem="assets/img/adorable_animals.svg" nome="adorable_animals" razao="Segue você" />,
    <Sugestao imagem="assets/img/smallcutecats.svg" nome="smallcutecats" razao="Segue você" />
    ]
    return (
        <div class="sugestoes">
            <Titulo />
            {sugestao.map(paginaSugerida => paginaSugerida)}
        </div>
    )
}