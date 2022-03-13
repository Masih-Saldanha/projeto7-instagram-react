import Setinha from "./Setinha";
import Story from "./Story";

export default function Stories() {
    const stories = [
        <Story nome="9gag" imagem="assets/img/9gag.svg" />,
        <Story nome="meowed" imagem="assets/img/meowed.svg" />,
        <Story nome="barked" imagem="assets/img/barked.svg" />,
        <Story nome="nathanwpylestrangeplanet" imagem="assets/img/nathanwpylestrangeplanet.svg" />,
        <Story nome="wawawicomics" imagem="assets/img/wawawicomics.svg" />,
        <Story nome="respondeai" imagem="assets/img/respondeai.svg" />,
        <Story nome="filomoderna" imagem="assets/img/filomoderna.svg" />,
        <Story nome="memeriagourmet" imagem="assets/img/memeriagourmet.svg" />
        ]
    return (
        <div class="stories">
            {stories.map(story => story)}
            <Setinha />
        </div>
    )
}