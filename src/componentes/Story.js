export default function Story(props) {
    const {nome, imagem} = props
    return (
        <div className="story">
            <div className="imagem">
                <img src={imagem} />
            </div>
            <div className="usuario">
                {nome}
            </div>
        </div>
    )
}