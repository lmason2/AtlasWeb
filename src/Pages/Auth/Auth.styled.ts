import styled from "styled-components";

const AuthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
    gap: 20px;
    transition: 0.3s;
`;

const AuthCard = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  flex-direction: column;
  gap: 10px;
  width: 30%;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 20px;
`;

const AuthTitle = styled.p`
color: ${(props) => props.theme.palette.primary.main};
font-family: "Ubuntu", sans-serif;
font-size: 40px;
margin: 0px auto;
justify-content: center;
transition: 0.3s;
display: flex;
`;

const AuthInputText = styled.p`
color: ${(props) => `gray`};
font-family: "Ubuntu", sans-serif;
font-size: 15px;
margin: 0px auto 0px 0px;
justify-content: start;
transition: 0.3s;
display: flex;
`;

const AuthButton = styled.button`
background-color: ${props => props.theme.palette.common.white};
border: ${props => `1px solid ${props.theme.palette.primary.main}`};
border-radius: 20px;
color: ${props => props.theme.palette.primary.main};
font-size: 15px;
font-family: "Kreon, serif";
padding: 10px 20px;
width: fit-content;
transition: 0.3s;
justify-content: center;
transition: 0.3s;
&:hover {
    background-color: ${props => props.theme.palette.primary.main};
    border: ${props => `1px solid ${props.theme.palette.common.white}`};
    color: ${props => props.theme.palette.common.white};
}
`

const AuthInput = styled.input`
border: 1px solid ${(props) => props.theme.palette.secondary.main};
background-color: ${(props) => props.theme.palette.common.white};
height: fit-content;
border-radius: 20px;
width: 80%;
margin: 0px auto 0px auto;
type: email;
padding: 10px 20px;
font-family: "Ubuntu", sans-serif;
transition: 0.3s;
font-size: 15px;
color: ${props => props.theme.palette.common.black};
&:focus {
    outline: inherit;
    border: 1px solid ${(props) => props.theme.palette.common.black};
}
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
transition: 0.3s;
gap: 10px;
`;

export {
  AuthContainer,
  AuthCard,
  AuthTitle,
  AuthInput,
  AuthInputText,
  AuthButton,
  ButtonContainer
};