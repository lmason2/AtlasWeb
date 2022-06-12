import { ArrowUpward } from "@mui/icons-material";
import * as React from "react"
import { ColumnContainer, GenericButton, RowContainer } from "../Shared/shared.styled";
import { CardHeaderTypography } from "../Shared/typography.styled";
import { MessageBoardContainer, MessageContainer, MessageInput, MessagePill, Message } from "./messageBoard.styled";

const MessageBoard = (props: any) => {
    return (
      <MessageBoardContainer>
        <CardHeaderTypography>{props.title}</CardHeaderTypography>
        <MessageContainer>
            <ColumnContainer>
            <MessagePill incoming={true}><Message>Short message</Message></MessagePill>
            <MessagePill incoming={false}><Message>Medium response that is two lines</Message></MessagePill>
            <MessagePill incoming={true}><Message>Let's test a longer message that is more than just one line once we set the width</Message></MessagePill>
            <MessagePill incoming={false}><Message>Lorem Ipsum is simply dummy text of the printing</Message></MessagePill>
            <MessagePill incoming={true}><Message>and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of</Message></MessagePill>
            <MessagePill incoming={false}><Message>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software</Message></MessagePill>
            <MessagePill incoming={true}><Message>like Aldus PageMaker including versions of Lorem Ipsum.</Message></MessagePill>
            </ColumnContainer>
        </MessageContainer>
        <RowContainer justifyContent="start">
          <MessageInput></MessageInput>
          <GenericButton padding="5px 0px 0px 0px" margin="10px 0px 0px 10px"><ArrowUpward /></GenericButton>
        </RowContainer>
      </MessageBoardContainer>
    );
}

export default MessageBoard;