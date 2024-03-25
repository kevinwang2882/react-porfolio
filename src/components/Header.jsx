import NavBar from "./NavBar";
import '../style/Header.css';

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
                            <img
                                src="https://www.svgrepo.com/show/360451/github-circle.svg"
                                alt="GitHub Icon"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/kevin-wang-kw1" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png"
                                alt="LinkedIn Icon"
                            />
                        </a>
                    </div>
                </div>
                <NavBar />
            </div>

        </div>
    );
}
