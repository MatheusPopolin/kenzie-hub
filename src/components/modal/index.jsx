import { StyledModal } from "./style";
import { Title3 } from "../../styles/components/typography";
import { StyledButton } from "../../styles/components/buttons";

export const Modal = ({ title, children, setModalOpenned }) => {
  return (
    <StyledModal>
      <div>
        <div>
          <Title3 color="grey-0">{title}</Title3>
          <StyledButton size="small" onClick={() => setModalOpenned(false)}>
            X
          </StyledButton>
        </div>
        {children}
      </div>
    </StyledModal>
  );
};
