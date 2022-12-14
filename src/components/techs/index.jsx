import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledTechs } from "./style";
import { Modal } from "../modal";
import { FormRegisterTech } from "../form";
import { Title2 } from "../../styles/components/typography";
import { StyledButton } from "../../styles/components/buttons";
import { Tech } from "./tech";

export const Techs = () => {
  const { user } = useContext(UserContext);
  const [addTechModalOpenned, setAddTechModalOpenned] = useState(false);

  return (
    <StyledTechs>
      {addTechModalOpenned && (
        <Modal
          setModalOpenned={setAddTechModalOpenned}
          title="Cadastrar Tecnologia"
        >
          <FormRegisterTech setAddTechModalOpenned={setAddTechModalOpenned} />
        </Modal>
      )}
      <div>
        <Title2 color="grey-0">Tecnologias</Title2>
        <StyledButton
          size="small"
          color="disabledTwo"
          onClick={() => setAddTechModalOpenned(true)}
        >
          +
        </StyledButton>
      </div>
      <ul>
        {user.techs.map((tech) => (
          <Tech key={tech.id} tech={tech} />
        ))}
      </ul>
    </StyledTechs>
  );
};
