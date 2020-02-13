import styled from 'styled-components';

const DivWithBackground = styled.div`
    background: url(${props => props.bgImage});
    width: 100%;
    min-height: 600px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    overflow-scrolling: touch;
`;

export default DivWithBackground;
