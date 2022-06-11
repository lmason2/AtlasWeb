import * as React from "react"
import Navbar from "../../Components/Navbar";
import { Card, RowContainer, StyledHR } from "../../Components/Shared/shared.styled";
import { CardHeaderTypography, MyHeaderTypography } from "../../Components/Shared/typography.styled";
import { MyTrainingContainer } from "./MyTraining.styled";

const TrainingHome = () => {
    const date = new Date().toLocaleDateString();
    return (
      <MyTrainingContainer>
        <MyHeaderTypography>{date}</MyHeaderTypography>
        <RowContainer>
          <Card>
            <CardHeaderTypography>Today</CardHeaderTypography>
            <StyledHR />
          </Card>
          <Card>
            <CardHeaderTypography>This Week</CardHeaderTypography>
            <StyledHR />
          </Card>
          <Card>
            <CardHeaderTypography>Planned</CardHeaderTypography>
            <StyledHR />
          </Card>
        </RowContainer>
      </MyTrainingContainer>
    );
}

export default TrainingHome;