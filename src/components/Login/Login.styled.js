import styled from "styled-components";

export const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  margin-bottom: 10vw;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
  box-sizing: border-box;
`;

export const BgImage = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: -1;
`;

export const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5em;
`;

export const CTALogoOne = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
`;

export const SignUpBtn = styled.button`
  font-weight: bold;
  background-color: #0063e5;
  color: #f9f9f9;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 1.4em;
  padding: 0.5em 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

export const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 0.7em;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export const CTALogoTwo = styled(CTALogoOne)``;
