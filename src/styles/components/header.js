import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  height: 118px;

  border-bottom: 1px solid var(--color-grey-3);

  display: flex;
  align-items: center;

  > div {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export default StyledHeader;
