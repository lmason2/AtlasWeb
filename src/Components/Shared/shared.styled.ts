import styled from "styled-components"

const ImageContainer = styled.div<{
    margin?: string
    padding?: string
}>`
margin: ${({margin}) => margin || "0px"};
padding: ${({padding}) => padding || "0px"};
display: flex;
justify-content: center;
`;

const Image = styled.img<{
    src: string
    margin?: string
    padding?: string
}>`
src: ${({src}) => src};
margin: ${({margin}) => margin || "0px"};
padding: ${({padding}) => padding || "0px"};
`

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const RowContainer = styled.div<{
  justifyContent?: string;
}>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: ${({ justifyContent }) => justifyContent};
`;

const CustomUList = styled.ul`
color: ${props => props.theme.palette.common.black};
font-size: 20px;
font-family: "Kreon", serif;
line-height: 50px;
`;

const GenericButton = styled.button<{
    backgroundColor?: string
    border?: string
    borderRadius?: string
    color?: string
    fontSize?: string
    fontFamily?: string
    padding?: string
    width?: string
    height?: string
    margin?: string
}>`
background-color: ${props => props.backgroundColor ||  props.theme.palette.common.white};
border: ${props => props.border || `2px solid ${props.theme.palette.secondary.main}`};
border-radius: ${({borderRadius}) => borderRadius || "25px"};
color: ${props => props.color || props.theme.palette.secondary.main};
font-size: ${({fontSize}) => fontSize || "20px"};
font-family: ${({fontFamily}) => fontFamily ||  `"Kreon", serif`};
padding: ${({padding}) => padding || "10px 20px"};
margin: ${({margin}) => margin || ""};
width: fit-content;
transition: 0.3s;
&:hover {
    background-color: ${props => props.backgroundColor ||  props.theme.palette.secondary.main};
    border: ${props => props.border || `2px solid ${props.theme.palette.common.white}`};
    color: ${props => props.color || props.theme.palette.common.white};
}
`

const StyledHR = styled.hr`
    background-color: ${(props) => props.theme.palette.common.black};
    height: 0.5px;
    border: none;
`;

const StyledVR = styled.hr`
background-color: ${(props) => props.theme.palette.common.black};
    border: none;
    width: 0.5px;
    height: 20px;
`;

const Card = styled.div<{ margin?: string }>`
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  margin: ${({ margin }) => margin || `0px`};
  width: fit-content;
  height: fit-content;
  diplay: flex;
  flex-direction: column;
  padding: 20px 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;

const CardRow = styled.div<{ margin?: string }>`
  diplay: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Gallery = styled.div`

`;

const NoStyleA = styled.a`
    text-decoration: none;
    color: inherit
    &:hover {
        text-decoration: underline;
        text-decoration-color: ${(props) => props.theme.palette.primary.main};
    }
`;

export {
  ImageContainer,
  StyledHR,
  Image,
  ColumnContainer,
  RowContainer,
  CustomUList,
  GenericButton,
  Card,
  Gallery,
  CardRow,
  NoStyleA,
  StyledVR
};