import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import PromoBox from "./PromoInfoBox"
import PromoRow from "./PromoRow"
import HeartLogo from "./icons/tc_heart_white.svg"
import ClapLogo from "./icons/tc_clap_white.svg"
import MoneyLogo from "./icons/tc_premium_white.svg"
import DonateLogo from "./icons/tc_donate_white.svg"
const BottomHero = () => (
  <Container>
    <Container className="orange mt-1">
      <Col className="center">
        <div style={{ marginBottom: "1.6em" }}>
          <PromoBox title="85%">
            YOU ALWAYS KEEP 85% OF THE REVENUE THAT YOUR WORK GENERATES.
          </PromoBox>
        </div>

        <PaidText>
          There are 3 easy ways to to get paid for your hard work:
        </PaidText>
        <div style={{ marginTop: "2rem" }}>
          <PromoRow alt={"heart"} headerImage={HeartLogo}>
            <li>
              Ad content added to the videos and films that you are offering for
              free will generate ad revenue.
            </li>
          </PromoRow>
        </div>
        <PromoRow alt={"clap"} headerImage={ClapLogo}>
          <li>
            You are offering your video/film for free and give your viewers the
            opportunity to support your work by giving a voluntary contribution
            in addition to ad revenue.
          </li>
        </PromoRow>
        <PromoRow alt={"money"} headerImage={MoneyLogo}>
          <li>You set a rent and/or buy price for your video or film.</li>
        </PromoRow>
      </Col>
    </Container>
    <DonationWrapper>
      <PromoRow alt={"donate"} headerImage={DonateLogo}>
        <li>
          Nonprofits and individuals can set up a campaign and raise funds for a
          good cause. You will keep 100% of the money you raise.
        </li>
      </PromoRow>
    </DonationWrapper>
  </Container>
)
const Container = styled.div`
  width: 100%;
  padding: 2rem;

  &.orange {
    background-color: rgba(247, 147, 29, 0.14);
  }
  &.mt-1 {
    margin-top: 1rem;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 0rem 0;
  }
`
const DonationWrapper = styled.div`

padding: 0rem 2rem 0;
@media screen and (max-width: 768px) {
    padding: 0rem 0rem 0;
  }

`
const PaidText = styled.div`
  color: #262626;
  opacity: 0.55;
  font-size: 1.6em;
  letter-spacing: 0.22px;
  text-align: center;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const Col = styled.div`
  display: flex;

  flex-direction: column;
  &.center {
    align-items: center;
    justify-content: center;
  }
`

export default BottomHero
