import { ArrowUpward } from "@mui/icons-material";
import * as React from "react"
import { ColumnContainer, GenericButton, RowContainer } from "../Shared/shared.styled";
import { CardHeaderTypography } from "../Shared/typography.styled";
import { MessageBoardContainer, MessageContainer, MessageInput } from "./messageBoard.styled";

const MessageBoard = () => {
    return (
      <MessageBoardContainer>
        <CardHeaderTypography>Messages</CardHeaderTypography>
        <MessageContainer>
            <ColumnContainer>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
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