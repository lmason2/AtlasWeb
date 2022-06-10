import * as React from "react";
import RunningPage from "../../Components/LandingPage/RunningPage";
import LiftingPage from "../../Components/LandingPage/LiftingPage";
import CommunicationPage from "../../Components/LandingPage/CommunicationPage";
import { ImageContainer, Image } from "../../Components/Shared/shared.styled";
import { StyledHR } from "../../Components/Shared/shared.styled";

const LandingPage = () => {
    return (
        <>
            <RunningPage></RunningPage>
            <StyledHR></StyledHR>
            <LiftingPage></LiftingPage>
            <StyledHR></StyledHR>
            <CommunicationPage></CommunicationPage>
            <StyledHR></StyledHR>
            <ImageContainer>
                <Image src="images/placeholder.png" width="200px" height="auto" margin="30px 0px 30px 0px"/>
            </ImageContainer>
        </>
    )
}

export default LandingPage;