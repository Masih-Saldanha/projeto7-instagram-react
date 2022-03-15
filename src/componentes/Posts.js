import Post from "./Post"

export default function Posts() {
    const posts = [
        {
            imagemUsuario: "assets/img/meowed.svg",
            nomeUsuario: "meowed",
            imagemPost: "assets/img/gato-telefone.svg",
            imagemCurtidoPor: "assets/img/respondeai.svg",
            nomeCurtidoPor: "respondeai",
            curtidoPorTantos: "outras 101.523 pessoas"
        },
        {
            imagemUsuario: "assets/img/barked.svg",
            nomeUsuario: "barked",
            imagemPost: "assets/img/dog.svg",
            imagemCurtidoPor: "assets/img/adorable_animals.svg",
            nomeCurtidoPor: "adorable_animals",
            curtidoPorTantos: "outras 99.159 pessoas"
        }
    ]
    return (
        <div className="posts">
            {
                posts.map((post, indice) => {
                    return (
                        <Post key={indice} imagemUsuario={post.imagemUsuario} nomeUsuario={post.nomeUsuario} imagemPost={post.imagemPost} imagemCurtidoPor={post.imagemCurtidoPor} nomeCurtidoPor={post.nomeCurtidoPor} curtidoPorTantos={post.curtidoPorTantos} />
                    )
                })
            }
        </div>
    )
}