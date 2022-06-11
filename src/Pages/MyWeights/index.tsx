import * as React from "react";
import { Card, RowContainer, StyledHR } from "../../Components/Shared/shared.styled";
import { CardHeaderTypography, CardRowTypography, MyHeaderTypography } from "../../Components/Shared/typography.styled";
import { MyWeightsContainer } from "./MyWeights.styled";

const WeightsHome = () => {
    return (
      <MyWeightsContainer>
        <MyHeaderTypography>Weights</MyHeaderTypography>
        <RowContainer>
          <Card>
            <CardHeaderTypography>Clean</CardHeaderTypography>
            <StyledHR />
            <CardHeaderTypography>165</CardHeaderTypography>
          </Card>
          <Card>
            <CardHeaderTypography>BackSquat</CardHeaderTypography>
            <StyledHR />
            <CardHeaderTypography>185</CardHeaderTypography>
          </Card>
          <Card>
            <CardHeaderTypography>Bench</CardHeaderTypography>
            <StyledHR />
            <CardHeaderTypography></CardHeaderTypography>
          </Card>
          <Card>
            <CardHeaderTypography>Trapbar</CardHeaderTypography>
            <StyledHR />
            <CardHeaderTypography>315</CardHeaderTypography>
          </Card>
          <Card>
            <CardHeaderTypography>Pin Squat</CardHeaderTypography>
            <StyledHR />
            <CardHeaderTypography>290</CardHeaderTypography>
          </Card>
          <Card>
            <CardHeaderTypography>Deadlift</CardHeaderTypography>
            <StyledHR />
            <CardHeaderTypography>284</CardHeaderTypography>
          </Card>
          <Card>
            <CardHeaderTypography>RDL</CardHeaderTypography>
            <StyledHR />
            <CardHeaderTypography>175</CardHeaderTypography>
          </Card>
          <Card>
            <CardHeaderTypography>Front Squat</CardHeaderTypography>
            <StyledHR />
            <CardHeaderTypography>130</CardHeaderTypography>
          </Card>
        </RowContainer>
      </MyWeightsContainer>
    );
}

export default WeightsHome;