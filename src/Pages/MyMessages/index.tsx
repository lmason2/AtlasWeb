import * as React from "react";
import MessageBoard from "../../Components/MessageBoard";
import { Card, RowContainer, StyledHR } from "../../Components/Shared/shared.styled";
import { CardHeaderTypography, MyHeaderTypography } from "../../Components/Shared/typography.styled";
import { MyMessagesContainer, Searchbar } from "./MyMessages.styled";

const MyMessages = () => {
    return (
        <MyMessagesContainer>
            <MyHeaderTypography>Messages</MyHeaderTypography>
            <Searchbar />
            <RowContainer>
                <MessageBoard title={"Brittany Garcia"} />
                <MessageBoard title={"Patrick Henner"} />
                <MessageBoard title={"Marcus M."} />
                <MessageBoard title={"Tanner Brown"} />
            </RowContainer>
        </MyMessagesContainer>

    );
}

export default MyMessages;