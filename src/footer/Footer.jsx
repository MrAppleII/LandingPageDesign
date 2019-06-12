import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Children } from "react"
import styled, { keyframes } from "styled-components"
const Footer = ({ children }) => (
  <FooterContainer>
    <Row>
      <Col>
        <FooterItem>Contact Us</FooterItem>
      </Col>
      <Col>
        <FooterItem>About Us</FooterItem>
      </Col>
      <Col>
        <FooterItem>Terms Of Use</FooterItem>
        <FooterItem>Privacy</FooterItem>
        <FooterItem>Legal Notices</FooterItem>
      </Col>
    </Row>

    <Col className="end">
      <FooterItem>© 2019 Trueclap, Inc.</FooterItem>
    </Col>
  </FooterContainer>
)
Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer

const FooterContainer = styled.div`
  position: static;
  background: #262626;
  color: white;
  display: flex;
  font-size: 13px;
  letter-spacing: 0.09px;
  justify-content:space-between;
  flex-direction: row;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif;
  bottom: 0;
  margin: 0;
  left: 0;
  width: 100%;
  min-height: 50px;
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 1rem;
  &.end {
    align-self: flex-end;
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const FooterItem = styled(props => <Link {...props} />)`
  margin: 0rem 0rem 0rem;
  color: white;
  text-decoration: none;
`
