export default function Sugestao(props) {
    const {imagem, nome, razao} = props
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={imagem} />
                <div className="texto">
                    <div className="nome">{nome}</div>
                    <div className="razao">{razao}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}