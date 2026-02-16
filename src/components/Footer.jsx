import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>Altri modi per fare acquisti: trova un Apple Store o un altro rivenditore vicino a te. Oppure chiama 000800 040 1966.</p>
                <img src="/logo.svg" alt ="Apple logo"/>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2026 Apple Inc. Tutti i diritti riservati.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
