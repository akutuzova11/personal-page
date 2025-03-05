import { email } from "../../data/email";
import { PersonalInformation } from "../../features/PersonalInformation";
import { socialMedia } from "../../data/socialMedia";
import { IconStyled } from "../IconLinks";
import { FooterStyled, Icons } from "./styled";
import { footerContent } from "../../data/content";

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
