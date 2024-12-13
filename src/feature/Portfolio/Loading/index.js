import { Paragraph, RotatingIcon } from "./styled";

export const Loading = () => {
  return (
    <>
      <Paragraph>Please wait, projects are being loaded</Paragraph>
      <RotatingIcon></RotatingIcon>
    </>
  );
};
