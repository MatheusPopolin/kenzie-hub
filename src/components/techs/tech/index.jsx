import { useState } from "react";
import { Modal } from "../../modal";
import { FormUpdateTech } from "../../form";
import { StyledTech } from "./style";
import { Headline, Title3 } from "../../../styles/components/typography";

export const Tech = ({ tech }) => {
  const [viewTechModalOpenned, setViewTechModalOpenned] = useState(false);

  return (
    <>
      {viewTechModalOpenned && (
        <Modal
          setModalOpenned={setViewTechModalOpenned}
          title="Atualizar Tecnologia"
        >
          <FormUpdateTech
            tech={tech}
            setViewTechModalOpenned={setViewTechModalOpenned}
          />
        </Modal>
      )}
      <StyledTech onClick={() => setViewTechModalOpenned(true)}>
        <Title3 color="grey-0">{tech.title}</Title3>
        <Headline color="grey-1">{tech.status}</Headline>
      </StyledTech>
    </>
  );
};
