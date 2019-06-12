import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import PromoSection from "../components/landingPage/PromoSection"
import BottomHero from "../components/landingPage/BottomHero"
import Hero from "../components/landingPage/Hero"
import styled, { keyframes } from "styled-components"
import MoneyLogo from "../components/landingPage/icons/MonetizeLogo.svg"
import AudienceLogo from "../components/landingPage/icons/AudienceLogo.svg"
import PortfolioLogo from "../components/landingPage/icons/PortfolioIcon.svg"

import LinkedInLogo from "../components/landingPage/icons/socialMedia/linkedin_icon.svg"
import FacebookLogo from "../components/landingPage/icons/socialMedia/facebook_icon.svg"
import InstagramLogo from "../components/landingPage/icons/socialMedia/instagram_icon.svg"
import TwitterLogo from "../components/landingPage/icons/socialMedia/twitter_icon.svg"

const landingPage = () => (
  <LandingLayout>
    {/*Section for the BIG Hero Sectio  */}
    <Hero />
    {/* Just a big orange divider */}
    <Dividier />
    <Row style={{ marginTop: "2.6rem" }}>
      <PromoSection title={"Monetize"} headerImage={MoneyLogo}>
        <div style={{ marginBottom: "2.0rem" }}>
          Upload your first video or film and you will be able to monetize your
          work immediately.
        </div>

        <ListWrapper>
          <li>
            There are three ways you can get paid for your work: through
            advertisements, voluntary conributions from viewers or rent and/or
            sale income.
          </li>
          <li>
            Your dashboard keeps you updated on your balance and transactions.
          </li>
          <li>You can request a payout at any time.</li>
        </ListWrapper>
      </PromoSection>
      <PromoSection title={"Portfolio"} headerImage={PortfolioLogo}>
        <div style={{ marginBottom: "2.0rem" }}>
          Once you upload a video or film, you will receive your own portfolio
          page.
        </div>

        <ListWrapper>
          <li>All your uploaded films and videos will be visible.</li>
          <li>
            You will be able to add your bio and other relevant information.
          </li>
          <li>
            You can add links to your work, shop, press, your social media
            accounts etc.
          </li>
        </ListWrapper>
      </PromoSection>
      <PromoSection title={"Audience"} headerImage={AudienceLogo}>
        <div style={{ marginBottom: "2.0rem" }}>
          With high quality content comes a dedicated audience.
        </div>
        <ListWrapper>
          <li>
            Viewers can follow you and will see your contributions in their
            feed.
          </li>
          <li>
            Viewers can also find your uploaded videos by searching by category
            or with a search term.
          </li>
        </ListWrapper>
      </PromoSection>
    </Row>
    <Col>
      <MediumPromoText>
        Upload your first video today and join a community of passionate
        creators.
      </MediumPromoText>
      <UploadButton type="button">Upload</UploadButton>
      <BottomHero style={{ marginTop: "6.9rem" }} />
    </Col>
    <SocialButtonContainer>
      <SocialMediaIcon src={LinkedInLogo} alt="linkedIn" />
      <SocialMediaIcon src={FacebookLogo} alt="Facebook" />
      <SocialMediaIcon src={InstagramLogo} alt="Instagram" />
      <SocialMediaIcon src={TwitterLogo} alt="Instagram" />
    </SocialButtonContainer>
  </LandingLayout>
)

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif;
  letter-spacing: 0.15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`
const MediumPromoText = styled.div`
  font-size: 21px;
  letter-spacing: 0.15px;
  font-weight: bold;
  text-align: center;
  margin: 3rem 0 2rem;
`
const LandingLayout = styled.div`
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif !important;

  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const ListWrapper = styled.ul`
  @media screen and (max-width: 768px) {
    margin: auto 2rem auto;
  }
  text-align: left;
`
const SocialButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  align-content: center;
`
const Col = styled.div`
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const UploadButton = styled.button`
  /* Font Settings */
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif !important;
  text-transform: uppercase;
  background: #00aecb;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0.14px;
  font-weight: bold;

  /* Border Settings */
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-style: solid;
  border-radius: 2px;

  /* Outline Settings */
  outline: none !important;

  /* Alignment and Size Settings */
  padding: 6px;
  min-width: 6.8em;
  text-align: center;
  transition: ease-in-out 0.4s;

  /* Additional Behevior */
  cursor: pointer;

  :hover {
    /* Smoothly change bkgnd color on hover */
    background-color: #00849b;
    transition: background-color ease 0.4s;
  }

  :active {
    outline: none;
    transition: scale 0.3s ease 0s;
    transform: scale(0.95);
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
const Dividier = styled.div`
  margin-top: 0.7em;
  border: 13px solid rgba(247, 147, 29, 0.14);
`
const SocialMediaIcon = styled.img`
  cursor: pointer;
  margin: 0.5rem;
`

export default landingPage
