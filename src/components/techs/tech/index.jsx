import { Headline, Title3 } from "../../../styles/components/typography";
import { StyledTech } from "./style";

export const Tech = ({tech}) => {
  return (
    <StyledTech>
        <Title3 color="grey-0">{tech.title}</Title3>
        <Headline color="grey-1">{tech.status}</Headline>
    </StyledTech>
  );
};
