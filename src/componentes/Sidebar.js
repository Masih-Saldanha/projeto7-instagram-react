import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Links from "./Links";
import CopyRight from "./CopyRight";

export default function Sidebar() {
    const usuario = [
        {
            nomeDeUsuario: "catanacomics",
            nomeReal: "Catana",
            imagem: "assets/img/catanacomics.svg"
        }
    ]
    return (
        <div className="sidebar">
            {
                usuario.map((user, indice) => {
                    return (
                        <Usuario key={indice} nomeDeUsuario={user.nomeDeUsuario} nomeReal={user.nomeReal} imagem={user.imagem} />
                    )
                })
            }
            <Sugestoes />
            <Links />
            <CopyRight />
        </div>
    )
}