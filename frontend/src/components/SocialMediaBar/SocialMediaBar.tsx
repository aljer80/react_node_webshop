import { Link } from "../../types/socialmedia.types"

/**
 * SocialMediaBar is a React component that displays social media icons.
 *
 * @component
 * @example
 * return (
 *   <SocialMediaBar />
 * );
 *
 * @param {Link[]} props - An array of Link objects representing social media icons.
 * @returns {React.ReactElement} The rendered SocialMediaBar component.
 */
const SocialMediaBar: React.FC<{myIcons: Link[]}> = ({ myIcons }) => {
    return (
        <section id="social-media-icons">
            {myIcons.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    <img src={link.src} alt={link.alt} title={link.title} />
                </a>
            ))}
        </section>
    )
}

export default SocialMediaBar