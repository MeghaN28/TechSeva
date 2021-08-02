import { React } from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./footerStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faTwitter ,faWhatsapp, faEnvelope } from "@fortawesome/free-brands-svg-icons";
import logo from "../../images/ISO.jpg";

const Footer = function () {
    return (
        <footer>
            <Box>
                <Container>
                    <Row>
                       
                            <img src={logo} style={{ padding: "2ex", marginLeft: -7, width:"150px", height:"150px" }} />
                        
                        <Column>
                            <img src={logo} style={{ padding: "2ex", marginLeft: -7, width:"150px", height:"150px" }} />
                        </Column>
                        <Column>
                            <div style={{ padding: "2ex" }}>
                                <h3 style={{ color: "red" }}>Follow us</h3>
                                <a href="https://www.facebook.com/learnbuildteach/"
                                    className="instagram social" style={{ color: "Magenta"}}>
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a> &nbsp; &nbsp;
                                <a href="https://www.facebook.com/learnbuildteach/"
                                    className="facebook social" style={{ color: "blue" }}>
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a> &nbsp; &nbsp;
                                <a href="https://www.facebook.com/learnbuildteach/"
                                    className="Youtube social" style={{ color: "red" }}>
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a>
                            </div>
                        </Column>
                    </Row>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;
