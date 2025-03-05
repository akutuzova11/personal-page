import { PersonalInformation } from "../PersonalInformation";
import ImageSrc from "../../images/profilePic.png";
import { AboutStyled, Image } from "./styled";
import { Button } from "../../components/Button";
import { ReactComponent as Envelope } from "../../images/envelope.svg";
import { aboutContent } from "../../data/content";

export const About = () => (
  <AboutStyled>
    <Image src={ImageSrc} alt="Photo of Angelina Kutuzova" />
    <div>
      <PersonalInformation
        isFooter={false}
        caption={aboutContent.caption}
        title={aboutContent.title}
        description={aboutContent.description}
      />
      <Button href="#contact" aria-label="Navigate to contact section">
        <Envelope />
        Hire Me
      </Button>
    </div>
  </AboutStyled>
);
