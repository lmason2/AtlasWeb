import * as React from "react"
import { ColumnContainer, CustomUList, GenericButton, Image, ImageContainer, RowContainer } from "../../Shared/shared.styled";
import { LandingPageContainer, LandingPageTitle } from "../../../Pages/LandingPage/LandingPage.styled";

const LiftingPage = () => {
    return (
        <LandingPageContainer direction="column">
            <LandingPageTitle>Elevate your team's strength through lifting.</LandingPageTitle>
            <RowContainer>
                <CustomUList>
                <li>Live updates on your team's stats</li>
                <li>Generate charts to visualize progress</li>
                </CustomUList>
                <CustomUList>
                <li>All of your athletes have their lift on the go</li>
                <li>Easily make adjustments as training loads eb and flow</li>
                </CustomUList>
            </RowContainer>
            <ImageContainer>
                <Image src="/images/placeholder.png" />
            </ImageContainer>
            <GenericButton margin="20px auto">Add Feature</GenericButton>
        </LandingPageContainer>
    )
}

export default LiftingPage;