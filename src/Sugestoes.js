import Titulo from "./Titulo";
import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const sugestao = [
        {
            imagem: "assets/img/bad.vibes.memes.svg",
            nome: "bad.vibes.memes",
            razao: "Segue você"
        },
        {
            imagem: "assets/img/chibirdart.svg",
            nome: "chibirdart",
            razao: "Segue você"
        },
        {
            imagem: "assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            razao: "Novo no Instagram"
        },
        {
            imagem: "assets/img/adorable_animals.svg",
            nome: "adorable_animals",
            razao: "Segue você"
        },
        {
            imagem: "assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            razao: "Segue você"
        }
    ]
    return (
        <div className="sugestoes">
            <Titulo />
            {
                sugestao.map((paginaSugerida, indice) => {
                    return (
                        <Sugestao key={indice} imagem={paginaSugerida.imagem} nome={paginaSugerida.nome} razao={paginaSugerida.razao} />
                    )
                })
            }
        </div>
    )
}