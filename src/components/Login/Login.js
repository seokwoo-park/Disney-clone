import React from "react";
import {
  BgImage,
  Container,
  Content,
  CTA,
  CTALogoOne,
  CTALogoTwo,
  Description,
  SignUpBtn,
} from "./Login.styled";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUpBtn>TRY FREE HERE</SignUpBtn>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;
