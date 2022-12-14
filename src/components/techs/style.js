import styled from "styled-components";

export const StyledTechs = styled.section`
  width: 100%;
  max-width: 780px;

  margin-bottom: 16px;

  > div {
    display: flex;
    justify-content: space-between;

    margin-bottom: 28px;
  }

  ul {
    padding: 22px;

    border-radius: var(--radius-2);

    display: flex;
    flex-direction: column;
    gap: 16px;

    background-color: var(--color-grey-3);
  }
`;
