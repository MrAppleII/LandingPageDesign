import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import HeroPhoto1 from "../components/MobileLandingPage/images/PhotoGroup1.png"
import HeroPhoto2 from "../components/MobileLandingPage/images/PhotoGroup2.png"
import VideoPlayerPreview from "../components/MobileLandingPage/images/tc_lp-video-screen.png"

import LinkedInLogo from "../components/MobileLandingPage/icons/linkedin_icon.svg"
import FacebookLogo from "../components/MobileLandingPage/icons/facebook_icon.svg"
import InstagramLogo from "../components/MobileLandingPage/icons/instagram_icon.svg"
import TwitterLogo from "../components/MobileLandingPage/icons/twitter_icon.svg"
const landingPageMobile = () => (
  <WidthWrapper className="Max-width-768">
    <ColFlex>
      <Padding className="px-1">
        <Margins className="my-3">
          <LargeText>
            Watch videos and films from top creators all over the world
          </LargeText>
        </Margins>
        <VideoPreview src={VideoPlayerPreview} width="auto" height="auto" />
        <ComingSoonText>
          Our a mobile version is coming soon. in the meantime view us on your
          laptop or desktop. Sign up below if you would like to get notifified
          when our app goes live
        </ComingSoonText>
      </Padding>
      <EmailInput placeholder="Email" />
      <GetNotifiedButton>Get Notified</GetNotifiedButton>
      <GreyContainer>
        <Padding className="px-3 py-2">
          <MediumText>
            The place where passionate video and filmmakers find their dedicated
            audience.
          </MediumText>
        </Padding>
      </GreyContainer>
      <Margins className="my-2">
        <AboutUsContainer>
          <SmallText className=" leftMobile">About Us</SmallText>

          <Margins className="my-3">
            <HeroImage src={HeroPhoto1} width="auto" height="auto" />
          </Margins>
          <Padding className="px-3 py-2">
            <LargeText className="grey bigger left">
              Discover new content daily
            </LargeText>
            <Margins className="my-2">
              <SmallText>
                Experience the joy of exploring a new topic through an expertly
                made video, see a short film full of humor, discover an
                independent filmmaker or learn something new by watching an
                investigative documentary.
              </SmallText>
            </Margins>
          </Padding>
          <GreyContainer>
            <Margins className="mt-2">
              <HeroImage src={HeroPhoto2} width="auto" height="auto" />
            </Margins>
            <Padding className="px-3 py-2">
              <LargeText className="grey bigger left">
                Upload your video or film
              </LargeText>
              <Margins className="my-1">
                <SmallText>
                  We are looking for you, storytellers and professional
                  videographers, dedicated film makers and dreamers. Your
                  masterpiece will be seen by an appreciative audience.
                </SmallText>
              </Margins>
            </Padding>
          </GreyContainer>
        </AboutUsContainer>
      </Margins>
      <SocialButtonContainer>
        <SocialMediaIcon src={LinkedInLogo} alt="linkedIn" />
        <SocialMediaIcon src={FacebookLogo} alt="Facebook" />
        <SocialMediaIcon src={InstagramLogo} alt="Instagram" />
        <SocialMediaIcon src={TwitterLogo} alt="Instagram" />
      </SocialButtonContainer>
    </ColFlex>
  </WidthWrapper>
)
const WidthWrapper = styled.div`
  margin: 0 auto;
  &.Max-width-768 {
    max-width: 768px;
  }
`
const VideoPreview = styled.img`
  align-self: center;
`
const ColFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif !important;
`
const Margins = styled.div`
  &.mt-1 {
    margin-top: 1rem;
  }
  &.mt-2 {
    margin-top: 2rem;
  }
  &.mt-3 {
    margin-top: 2rem;
  }

  &.my-1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  &.my-2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  &.my-3 {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  &.my-4 {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  &.my-5 {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`
const HeroImage = styled.img`
  align-self: center;
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and (max-width: 575px) {
    padding-left: 0rem;
    padding-right: 0rem;
  }
`
const Padding = styled.div`
  &.py-1 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  &.py-2 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  &.py-3 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  &.py-4 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  &.px-1 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  &.px-2 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  &.px-3 {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`
const SmallText = styled.div`
  font-size: 22px;
  color: black;
  letter-spacing: 0.15px;
  line-height: 1.3em;

  &.left {
    text-align: left;
    align-self: flex-start;
  }

  &.leftMobile {
    text-align: left;
    align-self: flex-start;
    padding-left: 2rem;
    padding-right: 2rem;
    @media screen and (max-width: 575px) {
      text-align: center;
      align-self: center;
    }
  }
`
const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const LargeText = styled.div`
  font-size: 39px;
  font-weight: 500;
  line-height: 1em;
  text-align: center;

  &.left {
    text-align: left;
    margin-left: 0;
    margin-right: auto;
  }
  &.bold {
    font-weight: bold;
  }
  &.grey {
    color: #777777;
  }
  &.bigger {
    font-size: 41px;
  }
`

const MediumText = styled.div`
  color: black;
  line-height: 1.3em;
  font-size: 27px;
  letter-spacing: 0.21px;
`
const ComingSoonText = styled.div`
  font-size: 19px;
  color: #262626;
  letter-spacing: 0.13px;
  text-align: center;
  line-height: 26px;
`
const EmailInput = styled.input`
  outline: none;
  margin: 1em;
  min-width: 336px;
  padding: 0.5em;
  color: #262626;
  border-radius: 1px;
  border-style: solid;
  border-color: rgba(38, 38, 38, 0.15);

  @media screen and (max-width: 420px) {
    min-width: 90%;
  }
`
const SocialMediaIcon = styled.img`
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`
const GetNotifiedButton = styled.div`
  background: #00aecb;
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 1px;
  text-transform: uppercase;
  padding: 0.4em 1.3em;

  font-size: 20px;
  letter-spacing: 0.09px;
  color: white;

  /* Margins */
  margin-bottom: 3rem;

  /* Additional Behevior */
  cursor: pointer;
  transition: background-color ease 0.4s;

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
const GreyContainer = styled.div`
  flex-grow: 1;
  background: #f7f7f7;
`
const SocialButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  align-content: center;

  margin-right: 0.8rem;
  @media screen and (max-width: 575px) {
    justify-content: center;
  }
`

export default landingPageMobile
