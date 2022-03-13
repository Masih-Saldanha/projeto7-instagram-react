import Post from "./Post"

export default function Posts() {
    const posts = [
        <Post imagemUsuario="assets/img/meowed.svg" nomeUsuario="meowed" imagemPost="assets/img/gato-telefone.svg" imagemCurtidoPor="assets/img/respondeai.svg" nomeCurtidoPor="respondeai" curtidoPorTantos="outras 101.523 pessoas" />,
        <Post imagemUsuario="assets/img/barked.svg" nomeUsuario="barked" imagemPost="assets/img/dog.svg" imagemCurtidoPor="assets/img/adorable_animals.svg" nomeCurtidoPor="adorable_animals" curtidoPorTantos="outras 99.159 pessoas" />
    ]
    return (
        <div class="posts">
            {posts.map(post => post)}
        </div>
    )
}