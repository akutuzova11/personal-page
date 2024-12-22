import { email } from "../../email";
import { PersonalInformation } from "../PersonalInformation";
import { socialMedia } from "../../socialMedia";
import { IconStyled } from "../IconLinks/index";
import { FooterStyled, Icons } from "./styled";
import { footerContent } from "../../content";

export const Footer = () => (
  <FooterStyled id="contact">
    <PersonalInformation
      caption={footerContent.caption}
      isFooter={true}
      title={<a href={`mailto:${email}`}>{email}</a>}
      description={footerContent.description}
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
);
