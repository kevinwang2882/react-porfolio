export default function Contact() {
    return (
      <div className="contact">
        <h1 className="title">Get in touch</h1>
        <div className="contact-info">
          <img
            src="https://static.vecteezy.com/system/resources/previews/031/400/781/original/email-icon-png-free-vector.jpg"
            alt="Email Icon"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <h2>Email: <a href="mailto:xinjiewang2882@gmail.com">xinjiewang2882@gmail.com</a></h2>
        </div>
        <div className="contact-info">
          <img
            src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png"
            alt="LinkedIn Icon"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <h2>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/kevin-wang-kw1" target="_blank" rel="noopener noreferrer">
              www.linkedin.com/in/kevin-wang-kw1
            </a>
          </h2>
        </div>
        <div className="contact-info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuANvhcmXlP_41PL4VxP38Vcsted42ZY5TBQ&usqp=CAU"
            alt="GitHub Icon"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <h2>
            GitHub:{" "}
            <a href="https://github.com/kevinwang2882" target="_blank" rel="noopener noreferrer">
              https://github.com/kevinwang2882
            </a>
          </h2>
        </div>
        <div className="contact-info">
          <img
            src="https://i.pinimg.com/736x/00/3d/ff/003dfff29dc38294446b0a306d0e5079.jpg"
            alt="Phone Icon"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <h2>Phone: 917-238-1526</h2>
        </div>
      </div>
    );
  }
  