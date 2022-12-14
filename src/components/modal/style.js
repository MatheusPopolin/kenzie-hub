import styled from 'styled-components';

export const StyledModal = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;

    height: 100vh;
    width: 100vw;

    padding: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-grey-opacity);


    > div{
        width: 100%;
        max-width: 369px;
        border-radius: var(--radius-2)
    }

    > div > div{
        height: 50px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        padding: 0 20px;

        background-color: var(--color-grey-2);
        border-radius: var(--radius-2) var(--radius-2) 0px 0px;
    }
`;

