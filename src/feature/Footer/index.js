import { email } from "../../email";
import { PersonalInformation } from "../PersonalInformation";
import { socialMedia } from "../../socialMedia";
import { IconStyled } from "../IconLinks/index";
import { FooterStyled, Icons } from "./styled";

export const Footer = () => {
  return (
    <>
      <FooterStyled>
        <PersonalInformation
          caption="LET'S TALK"
          isFooter={true}
          title={email}
          description="Let’s make your ideas come to life! If you’re working on a website, dashboard, or mobile app and need some help, don’t hesitate to get in touch. I’d love to collaborate."
        />
        <Icons>
          {socialMedia.map(({ name, url, Icon }) => (
            <li key={name}>
              <IconStyled
                as="a"
                href={url}
                title={name}
                target="_blank"
                rel="noreferrer"
              >
                <Icon />
              </IconStyled>
            </li>
          ))}
        </Icons>
      </FooterStyled>
    </>
  );
};
