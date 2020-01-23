import styled from 'styled-components';

const DivWithBackground = styled.div`
    background: url(${props => props.bgImage});
    width: 100%;
    height: 90vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default DivWithBackground;
