import styled from "styled-components";

const LandingPageContainer = styled.div<{
    direction?: string
}>`
    display: flex;
    flex-direction: ${({direction}) => direction || "row"};
    justify-content: center;
    margin: 20px 50px;
    padding: 0px 0px 0px 0px
`;

const LandingPageTitle = styled.p`
  color: ${props => props.theme.palette.common.black};;
  font-size: 40px;
  font-family: 'Ubuntu', sans-serif;
  margin: auto;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.palette.primary.main};
`;

export { LandingPageContainer, LandingPageTitle }