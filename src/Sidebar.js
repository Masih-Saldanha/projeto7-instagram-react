import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Links from "./Links";
import CopyRight from "./CopyRight";

export default function Sidebar() {
    const usuario = [<Usuario nomeDeUsuario="catanacomics" nomeReal="Catana" imagem="assets/img/catanacomics.svg" />]
    return (
        <div class="sidebar">
            {usuario.map(user => user)}
            <Sugestoes />
            <Links />
            <CopyRight />
        </div>
    )
}