import styled from 'styled-components';

const DivWithBackground = styled.div`
    background: url(${props => props.bgImage});
    width: 100%;
    height: 100vh;
     background-size: cover;
`;

export default DivWithBackground;
