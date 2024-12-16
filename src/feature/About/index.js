import { PersonalInformation } from "../PersonalInformation";
import ImageSrc from "../../images/profilePic.png";
import { AboutStyled, Image } from "./styled";
import { Button } from "../Button";
import {ReactComponent as Envelope} from "../../images/envelope.svg"

export const About = () => (
  <AboutStyled>
    <Image src={ImageSrc} alt="Photo of Angelina Kutuzova" />
    <div>
      <PersonalInformation
        isFooter={false}
        caption="THIS IS"
        title="Angelina Kutuzova"
        description="👩🏻‍💻🚀 With a solid background in Customer Success and a growing expertise in frontend development, I’m excited to bring my skills to new challenges. I’m currently looking for opportunities to contribute to innovative web projects."
      />
      <Button>
        <Envelope />
        Hire Me
      </Button>
    </div>
  </AboutStyled>
);
