import linkedIn from "../../assets/linkedIn.png";
import gitHub from "../../assets/gitHub.png";
import { Icon } from "../../types/icon.types";

interface SocialMediaBarProps {
 icon: Icon 
}

const SocialMediaBar: React.FC<SocialMediaBarProps> = () => {

  const linkedInIcon: Icon = {
    src: linkedIn,
    alt: "linkedIn", 
    title: "My linkedIn",
    href: "https://www.linkedin.com/in/alexandra-jernberg-a66316251"
  }

  const gitHubIcon: Icon = {
    src: gitHub,
    alt: "gitHub", 
    title: "My GitHub",
    href: "https://www.github.com/aljer80"
  }

  const myIcons: Icon[] = [
    linkedInIcon,
    gitHubIcon
  ]

  return (
      <div id="social-media-icons" role="menubar">
          {myIcons.map((icon, index) => (
            <a key={index} href={icon.href} title={icon.title} target="_blank" rel="noopener noreferrer">
            <img src={icon.src} alt={icon.alt} />
        </a>    
          ))}
      </div>
    );
}

export default SocialMediaBar