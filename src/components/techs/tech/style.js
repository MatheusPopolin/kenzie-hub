import styled from "styled-components";

export const StyledTech = styled.li`
  width: 100%;
  height: 49px;

  padding: 0 22px;

  border-radius: var(--radius-2);

  background-color: var(--color-grey-4);

  :hover {
    background-color: var(--color-grey-2);
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  cursor: pointer;
`;
