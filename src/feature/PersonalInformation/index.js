import { Caption, Title, Description } from "./styled.js";

export const PersonalInformation = ({
  isFooter,
  caption,
  title,
  description,
}) => (
  <>
    <Caption>{caption}</Caption>
    <Title $footer={isFooter}>{title}</Title>
    <Description $footer={isFooter}>{description}</Description>
  </>
);
