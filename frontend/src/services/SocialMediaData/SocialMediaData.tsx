import linkedIn from "../../assets/linkedIn.png"
import github from "../../assets/github.png"
import { Link } from "../../types/socialmedia.types"

const linkedInIcon: Link = {
    src: linkedIn,
    alt: "linkedIn",
    title: "My linkedIn",
    href: "https://linkedin.com/mitt-namn-här"
}

const githubIcon: Link = {
    src: github,
    alt: "github",
    title: "My github",
    href: "https://github.com/mitt-namn-här"
}

export const myIcons: Link[] = [
    linkedInIcon,
    githubIcon
]