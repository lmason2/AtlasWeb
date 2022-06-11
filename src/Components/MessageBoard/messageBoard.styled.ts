import styled from "styled-components";

const MessageBoardContainer = styled.div`
  border: 1px solid ${(props) => props.theme.palette.secondary.main};
  margin: 20px 20px 0px 0px;
  width: 350px;
  height: 500px;
  diplay: flex;
  flex-direction: column;
  padding: 20px 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;

const MessageContainer = styled.div`
    background-color: rgb(228, 209, 185, 0.5);
    margin-top: 10px;
    padding: 10px 0px 10px 0px;
    height: 80%;
    border-radius: 10px;
    overflow: scroll;
`;

const MessageInput = styled.input`
  background-color: rgb(143, 189, 211, 0.5);
  margin-top: 10px;
  width: 75%;
  border: none;
  border-radius: 10px;
  height: 30px;
  color: white;
  font-size: 20px;
  font-family: Kreon, serif;
  padding: 5px 10px;
  &:focus {
    outline-width: 0;
  }
`;

const MessagePill = styled.div<{
    incoming: boolean
}>`
margin: ${({incoming}) => incoming ? `5px auto 5px 10px` : `5px 10px 5px auto`};
width: fit-content;
max-width: 100px;
border-radius: 20px;
background-color: ${({incoming}) => incoming? `black` : `white`};
color: ${({incoming}) => incoming? `white` : `black`};
padding: 5px 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Message = styled.p`
font-family: Ubuntu, sans-serif;
font-size: 12px;
margin: 0px;
`;

export {
  MessageBoardContainer,
  MessageContainer,
  MessageInput,
  MessagePill,
  Message,
};