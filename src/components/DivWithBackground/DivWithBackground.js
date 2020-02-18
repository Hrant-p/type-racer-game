import styled from 'styled-components';

const DivWithBackground = styled.div`
    min-width: 100vw;
    min-height: 90vh;
    background: url(${props => props.bgImage}) no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    overflow-scrolling: touch;
`;

export default DivWithBackground;
