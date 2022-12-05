import styled from 'styled-components';

const StyledRegisterPage = styled.div`
    min-height: 100vh;
    display: flex;
    margin: 40px 0;

    > div > div{
        width: 100%;
        max-width: 370px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    >div{
        gap: 20px;
    }
`;

export default StyledRegisterPage;