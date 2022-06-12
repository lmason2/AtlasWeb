import styled from "styled-components";

const MyMessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Searchbar = styled.input`
  type: text;
  placeholder: Search..;
  border: 2px solid ${(props) => props.theme.palette.primary.main};
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 20px;
  padding: 5px 10px;
  color: ${(props) => props.theme.palette.primary.main};
  font-family: "Ubuntu", sans-serif;
  margin: 20px auto 0px auto;
  width: 80%;
  &:focus {
    border-color: ${(props) => props.theme.palette.secondary.main};
    outline: inherit;
  }
`;

export {MyMessagesContainer, Searchbar};