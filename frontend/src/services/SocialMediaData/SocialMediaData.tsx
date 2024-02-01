import linkedIn from "../../assets/linkedIn.png"
import github from "../../assets/github.png"
import { Link } from "../../types/socialmedia.types"

/**
 * Social media link object representing a LinkedIn profile.
 * @type {Link}
 */
const linkedInIcon: Link = {
    src: linkedIn,
    alt: "linkedIn",
    title: "My linkedIn",
    href: "https://www.linkedin.com/in/alexandra-jernberg-a66316251/"
}
/**
 * Social media link object representing a GitHub profile.
 * @type {Link}
 */
const githubIcon: Link = {
    src: github,
    alt: "github",
    title: "My github",
    href: "https://github.com/aljer80"
}
/**
 * An array of social media link objects.
 * @type {Link[]}
 */
export const myIcons: Link[] = [
    linkedInIcon,
    githubIcon
]