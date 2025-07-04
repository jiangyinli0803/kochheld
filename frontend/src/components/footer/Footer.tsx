import Container from "@mui/material/Container";

import "./Footer.css";
import LogoFooter from '../../assets/images/Logo_footer.png';


export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h3 className="footer-heading">Catalog</h3>
                        <ul className="footer-list">
                            <li>Frühstück</li>
                            <li>Mittagessen</li>
                            <li>Abendessen</li>
                            <li>Snacks</li>
                            <li>Vegetarische Gerichte</li>
                            <li>Weltküchen</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Info</h3>
                        <ul className="footer-list">
                            <li>Über uns</li>
                            <li>Organisatoren</li>
                            <li>Artikel</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-line" />
                    <img src={LogoFooter} alt="Koch Held Logo" className="footer-logo" />
                    <div className="footer-line" />
                </div>
                <p className="footer-text">2025 © Koch Held – Deine Plattform für Rezepte</p>
            </Container>
        </footer>
    );
}
