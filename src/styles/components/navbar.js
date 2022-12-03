import styled from 'styled-components';

const StyledNavbar = styled.nav`
    width: 100vw;
    height: 72px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    border-bottom: 1px solid var(--color-grey-3);

    display: flex;
    align-items: center;

    > div{
        flex-direction: row;
        justify-content: space-between;
    }
`;

export default StyledNavbar;