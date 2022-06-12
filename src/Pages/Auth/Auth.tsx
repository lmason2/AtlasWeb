import * as React from "react";
import { AuthContainer, AuthTitle, AuthCard, AuthInput, AuthInputText, AuthButton, ButtonContainer } from "./Auth.styled";

const Auth = () => {
    const [signingUp, setSigningUp] = React.useState(false);

    return (
      <AuthContainer>
        <AuthTitle>Atlas</AuthTitle>
        <AuthCard>
          {signingUp && (
            <>
              <AuthInputText>Full Name</AuthInputText>
              <AuthInput></AuthInput>
            </>
          )}
          <AuthInputText>Email</AuthInputText>
          <AuthInput></AuthInput>
          <AuthInputText>Password</AuthInputText>
          <AuthInput></AuthInput>
          {signingUp && (
            <>
              <AuthInputText>Confirm Password</AuthInputText>
              <AuthInput></AuthInput>
            </>
          )}
          <ButtonContainer>
            <AuthButton
              onClick={() => {
                setSigningUp(false);
              }}
            >
              Sign In
            </AuthButton>
            <AuthButton
              onClick={() => {
                setSigningUp(true);
              }}
            >
              Sign Up
            </AuthButton>
          </ButtonContainer>
        </AuthCard>
        <AuthCard>
          <ButtonContainer>
            <AuthButton>Continue with Google</AuthButton>
          </ButtonContainer>
          <ButtonContainer>
            <AuthButton>Continue with Apple</AuthButton>
          </ButtonContainer>
        </AuthCard>
      </AuthContainer>
    );
}

export default Auth;