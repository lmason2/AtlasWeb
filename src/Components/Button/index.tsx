import * as React from "react";
import { GenericButton } from "../Shared/shared.styled";

const Button = (props: any) => {
    return (
        <GenericButton onClick={props.onClick}>{props.children}</GenericButton>
    )
}

export default Button;