import * as React from "react"
import { useTheme } from "styled-components";
import { ColumnContainer, Image, ImageContainer, CustomUList, GenericButton } from "../../Shared/shared.styled"
import { LandingPageContainer, LandingPageTitle } from "../../../Pages/LandingPage/LandingPage.styled";

const RunningPage = () => {
    const theme = useTheme();
    return (
      <LandingPageContainer>
        <ColumnContainer>
          <LandingPageTitle>
            All of your team's training needs in one place.
          </LandingPageTitle>
          <CustomUList>
            <li>List Item 1</li>
            <li>List Item 2</li>
          </CustomUList>
          <GenericButton>
            Add Feature
          </GenericButton>
        </ColumnContainer>
        <ImageContainer margin="0px 0px 0px 30px">
          <Image src="/images/placeholder.png" />
        </ImageContainer>
      </LandingPageContainer>
    );
}

export default RunningPage;