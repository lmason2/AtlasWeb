import * as React from "react"
import { ColumnContainer, CustomUList, GenericButton, Image, ImageContainer } from "../../Shared/shared.styled";
import { LandingPageContainer, LandingPageTitle } from "../../../Pages/LandingPage/LandingPage.styled";

const CommunicationPage = () => {
    return (
      <LandingPageContainer>
        <ImageContainer margin="0px 50px 0px 0px">
          <Image src="images/placeholder.png" />
        </ImageContainer>
        <ColumnContainer>
          <LandingPageTitle>Always stay in touch.</LandingPageTitle>
          <CustomUList>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </CustomUList>
          <GenericButton>Add Feature</GenericButton>
        </ColumnContainer>
      </LandingPageContainer>
    );
}

export default CommunicationPage;