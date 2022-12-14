import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 42px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  width: 100%;
  max-width: 370px;

  background: var(--color-grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: var(--radius-2);

  button {
    width: 100%;
  }

  a {
    width: 100%;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
`;
