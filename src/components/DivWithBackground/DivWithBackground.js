import styled from 'styled-components';

const DivWithBackground = styled.div`
    background: url(${props => props.bgImage});
    width: 100%;
    height: calc((90vh + 550px) / 2);
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    overflow-scrolling: touch;
`;

export default DivWithBackground;
