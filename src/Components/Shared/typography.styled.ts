import styled from "styled-components";

const MenuTypography = styled.p`
  color: ${(props) => props.theme.palette.primary.main};
  font-family: "Ubuntu", sans-serif;
  font-size: 30px;
  margin: 0px;
`;

const MyHeaderTypography = styled.p`
color: ${(props) => props.theme.palette.common.black};
font-family: "Ubuntu", sans-serif;
font-size: 40px;
margin: 0px auto;
text-decoration: underline;
text-decoration-color: ${props => props.theme.palette.secondary.main}
`;

const CardHeaderTypography = styled.p`
color: ${(props) => props.theme.palette.common.black};
font-family: "Ubuntu", sans-serif;
font-size: 20px;
margin: 0px auto;
justify-content: center;
display: flex;
`;

const CardRowTypography = styled.p<{ float?: string, margin?: string }>`
color: ${(props) => props.theme.palette.common.black};
float: ${({float}) => float || ""};
margin: ${({margin}) => margin || ""};
font-family: "Kreon", serif;
font-size: 15px;
max-width:250px;
word-wrap:break-word;
`;

export {
  MenuTypography,
  MyHeaderTypography,
  CardHeaderTypography,
  CardRowTypography,
};