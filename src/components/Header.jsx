import NavBar from "./NavBar";
import '../style/Header.css';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <div className="header-image">
                    <div className="image-box">
                        <img src="WechatIMG350.jpg" alt="Your Image" />
                    </div>
                </div>
                <h1>Kevin Wang</h1>
                <div>
                    <div className="social-links">
                        <a href="https://github.com/kevinwang2882" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare  style={{ width: '40px', height: '40px', marginRight: '3px' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/kevin-wang-kw1" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={{ width: '40px', height: '40px', marginRight: '3px' }} />
                        </a>
                    </div>
                </div>
                <NavBar />
            </div>

        </div>
    );
}
