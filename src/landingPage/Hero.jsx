import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import CreatorLogo from "./icons/tc_creator.png"
const Hero = () => (
  <div>
    <HeroLayout>
      <InfoSection>
        <InfoSection className="lgHeader">
          {" "}
          Share your work at your own terms.
        </InfoSection>
        <SmartHider className="showNormal">
        <InfoSection className="subtext"> The decision is yours.</InfoSection>
        <InfoSection className="subtext">
          {" "}
          Add your video to watch for free, allow viewers to support your work
          with a contribution or let your viewers rent or buy your work.
        </InfoSection>
        </SmartHider>
      </InfoSection>
      <BigHero src={CreatorLogo} width="100%" />
      <SmartHider className="showMobile">
      <InfoSection className="subtext"> The decision is yours.</InfoSection>
        <InfoSection className="subtext">
          {" "}
          Add your video to watch for free, allow viewers to support your work
          with a contribution or let your viewers rent or buy your work.
        </InfoSection>
        </SmartHider>
    </HeroLayout>
    <BottomText>{" "}
    Market your video or film and earn, connect with your audinence, 
    discover new works – all on one platform.</BottomText>
  </div>
)
Hero.propTypes = {}

Hero.defaultProps = {}
const HeroLayout = styled.div`
  display: flex;
 
  flex-direction: row;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif;
  align-items: center;
  vertical-align: baseline;
  justify-content: center;
  margin-top: 1rem;

  @media screen and (max-width:768px) {
    flex-direction: column;
  }

`

const SmartHider = styled.div`
&.showNormal{
  
 
  @media screen and (max-width:768px) {
    display:none;
  }

 

}
&.showMobile{
  display:none;
  @media screen and (max-width:768px) {
     display:block;
  }
  
 
 

}
`
const BottomText = styled.div`
font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif;
font-size: 32px;
color: #262626;
letter-spacing: 0.22px;
text-align: center;
padding:1.0em;
line-height:1.2em;
`
const InfoSection = styled.div`
flex-grow:0;
flex-shrink:1;
  &.lgHeader {
    font-size: 40px;

    line-height: 1em;

    margin-bottom: 0.3em;
    @media screen and (max-width:768px) {
      margin: 0.6em 0 0.6em;
  }
  }
  &.subtext {
    margin-bottom: 0.4em;
    @media screen and (max-width:768px) {
      text-align:center;
  }
  }

  @media screen and (max-width:768px) {
  }
  @media screen and (max-width:992px) {
   
  }
  @media screen and (max-width:575px) {
    flex-direction: column;
  }
`
const BigHero = styled.img`
align-self:center;
max-height:80vh;
width:auto;
object-fit:contain;
  @media screen and (max-width:768px) {
  max-height:50vh;

  }
  @media screen and (max-width:992px) {
    max-height:50vh;
  }
  @media screen and (max-width:575px) {
    max-height:50vh;
  }
`
export default Hero
