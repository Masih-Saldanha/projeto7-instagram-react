export default function TextoCurtido(props) {
    return (
        <div class="texto">
            Curtido por <strong>{props.nomeCurtidoPor}</strong> e <strong>{props.curtidoPorTantos}</strong>
        </div>
    )
}