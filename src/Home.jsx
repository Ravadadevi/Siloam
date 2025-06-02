import React from 'react';
import './Home.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Church() {

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: ""
    });

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  const relatedItems = [
  {
    image: '/youth_.webp',
    title: 'God Knows and Loves You',
    description:
      'Each of us is a beloved child of God. You can draw closer to your Heavenly Father through prayer and learn to recognize His loving guidance in your life.',
  },
  {
    image: '/hong_kong.webp',
    title: 'Jesus Taught Us to Love One Another',
    description:
      'Jesus provides the ultimate example of love. To follow Him is to love God and serve those around you.',
  },
  {
    image: '/woman.webp',
    title: "The Book of Mormon and the Bible Are God's Word",
    description:
      'The Book of Mormon and the Bible teach us about God’s plan and testify of Jesus Christ.',
  },
   {
    image: '/christ_art_hofmann.webp',
    title: "Jesus Christ Is Your Savior",
    description:
      'Jesus Christ is the Son of God—your Savior and Redeemer, sent to save us all. Because of Him, you can find joy in knowing you can live with God and your loved ones for eternity..',
  },
];
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }
    dataToSend.append("access_key", "9a85e460-87f2-4647-903f-21a3a1ad4bd5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: dataToSend
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setIsSubmitted(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      {/* church logo and menu starts here */}
      <div className="main">

      <Header />
  
        {/* church logo and menu ends here */}

        {/* home page starts here */}
        <div className="home">
          <div className="bgvideo">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="content1">
            <h1>
              Gather together <br /> with us
            </h1>
          </div>
        </div>
  <br /><br />  <br /><br />
  <div className='welcome' style={{ textAlign: 'center', margin: '180px 0 40px 0' }}>
    <h1 style={{ fontWeight: 400, fontSize: '2.8rem', marginBottom: 24 }}>
      Welcome to Siloam Chirst Ministries 
    </h1>
    <p style={{ fontSize: '1.15rem', color: '#333', marginBottom: 18 }}>
      SILOAM exists to lead people to real transformation as they love God and change their world.
    </p>
    <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 18 }}>
      We accomplish this as people:
    </p>
    <div style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: 1 }}>
      KNOW GOD // FIND FREEDOM // DISCOVER PURPOSE // MAKE A DIFFERENCE
    </div>
  </div>

        <div className="homecontent2">
          <div className="head1">
            <h1>This is SILOAM CHRIST MINISTRIES</h1>
            <br /> <br />
            <p>
            You have experienced many loves in this world. Taste the love of Christ too. <br /> You will feel so wonderful.
            </p>
            <br />
            <p>
            Now I can't see fully... but God has caught me and is using me as a witness... <br />I serve God as someone who proclaims the love of Christ to many.
            </p>
          </div>
          <div className="head2">
            <img src="/siloam.jpg" alt="Pastor John" />
          </div>
        </div>

        <div className="homecontent3">
          <div className="test">
         <div className="vd">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1u74h16OC3s?si=fVpnbp2UmEyMnG-v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="content2">
            <h1>Watch joel paul’s message</h1>  <br />
           <p>Watch the latest powerful message from the man of god <br /> and be blessed and empowered in your spirit.</p> <br />
     <div className="shares">
           <Link to="/watchnow" className="btnm">
      Watch Now<span className="btnm-border"></span>
    </Link>
    <div className="tooltip-container">
  <div className="button-content">
    <span className="text5">Share</span>
    <svg
      className="share-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
      ></path>
    </svg>
  </div>
  <div className="tooltip-content">
    <div className="social-icons">
      <a href="https://twitter.com" className="social-icon twitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
          ></path>
        </svg>
      </a>
      <a href="https://web.whatsapp.com/" class="social-icon whatsapp">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
    <path d="M380.9 97.1C339-3.9 222.2-32 132.7 9.7 43.1 51.4-5.2 165.5 36.7 255l-35.5 104.7c-4.5 13.3 8.4 26.2 21.6 21.6L127.4 345c89.6 41.9 203.7-6.3 245.4-95.8 41.8-89.6 13.5-206.4-91.9-248.1zm-3.3 209.3c-37.6 80.7-134.3 118.6-215 80.9l-12.5-5.8-62.4 25.6 24.5-72.1-6.1-12.7c-38.2-79.4-3.5-174.4 76.9-212.6 80.3-38.2 175.2-3.8 213.4 76.2 18.6 39.1 19.3 84.6 0.1 125.5zm-70.2-43.8c-7.3-3.7-43.5-21.5-50.3-24-6.8-2.5-11.7-3.7-16.5 3.7s-19 24-23.3 29c-4.3 5-8.5 5.6-15.7 1.9-7.3-3.7-30.9-11.4-58.9-36.4-21.8-19.5-36.4-43.6-40.7-51-4.3-7.3-.5-11.2 3.2-15.2 3.3-3.6 7.3-9.4 10.9-14.1 3.6-4.7 4.8-7.8 7.3-13 2.4-5.2 1.2-9.8-.6-13.6s-16.5-39.7-22.6-54.4c-5.9-14.1-11.9-12.2-16.5-12.4-4.3-.2-9.3-.2-14.2-.2s-13 1.8-19.7 9.2c-6.7 7.5-25.5 24.9-25.5 60.7s26.1 70.4 29.7 75.4c3.6 5 51.3 78.2 124.5 109.7 17.4 7.4 30.9 11.8 41.4 15.1 17.4 5.5 33.3 4.7 45.9 2.9 14-2.1 43.4-17.8 49.6-35s6.2-31.9 4.3-35.1c-1.8-3.2-6.6-5.2-13.9-8.9z"/>
  </svg>
</a>

      <a href="https://www.facebook.com/" class="social-icon facebook">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          ></path>
        </svg>
      </a>
      <a href="https://www.instagram.com/joelvarigeti77?igsh=MXRsZ2dtdWhtaWw1Mw==" class="social-icon instagram">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.773.13 4.548.392 3.465 1.475 2.382 2.558 2.12 3.783 2.062 5.062.014 8.332 0 8.756 0 12s.014 3.668.072 4.948c.058 1.279.32 2.504 1.403 3.587 1.083 1.083 2.308 1.345 3.587 1.403 1.28.058 1.704.072 4.948.072s3.668-.014 4.948-.072c1.279-.058 2.504-.32 3.587-1.403 1.083-1.083 1.345-2.308 1.403-3.587.058-1.28.072-1.704.072-4.948s-.014-3.668-.072-4.948c-.058-1.279-.32-2.504-1.403-3.587C19.504.392 18.279.13 17 .072 15.72.014 15.296 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
          ></path>
        </svg>
      </a>
      
      <a href="https://www.linkedin.com/login" class="social-icon linkedin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          ></path>
        </svg>
      </a>
     
    </div>
  </div>
</div>
</div>

      </div>
         </div>
        </div>

        <div className="marque">
          <h1>Library</h1>
          <div className="im">
            <img src="/i1.jpeg" alt="i1" />
            <img src="/i2.jpeg" alt="i2" />
            <img src="/i3.jpeg" alt="i3" />
            <img src="/i4.jpeg" alt="i4" />
            <video id="video-container" src="/video1.mp4" autoPlay loop muted playsInline />
            <img src="/i5.jpeg" alt="i5" />
            <img src="/i6.jpeg" alt="i6" />
            <img src="/i7.jpeg" alt="i7" />
            <img src="/i1.jpeg" alt="i1 again" />
          </div>
        </div>

    

 <div className="related-content-container">
      <h2 className="related-content-title">Related Content</h2>
      <div className="related-cards">
        {relatedItems.map((item, index) => (
          <div className="related-card" key={index}>
            <img src={item.image} alt={item.title} className="related-image" />
            <div className="related-text">
              <h3 className="related-card-title">{item.title}</h3>
              <p className="related-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>      
      {/* home page ends here */}


 <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          Not sure what you need? The team at Square Events will be happy to listen to you and support event ideas you hadn’t considered.
        </p>
        <p>📧 joelvarigeti77@gmail.com</p>
        <p>📞 Support: +91 9000832512 <br />   +91 9963065687</p>
      </div><br />

      <div className="contact-form">
        <h3>We’d love to hear from you!<br />Let’s get in touch</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" name='firstName'  onChange={handleChange} placeholder="First Name" required/>
            <input type="text" name='lastName' onChange={handleChange} placeholder="Last Name" required/>
          </div>
          <div className="form-group">
            <input type="email" name='email' onChange={handleChange} placeholder="Email"  required />
            <input type="text" name='phoneNumber' onChange={handleChange} placeholder="Phone number" required/>
          </div>
          <textarea name='message' placeholder="Your Message" onChange={handleChange} className="full-width" rows="4" required/>
          <button type="submit">Send Message</button>
        </form> <br />
                  <p>{result}</p>

      </div>
    </div>



        <div className="footer">
            <br /> 
            <div className="foot">
              <div>
              <img src="/jesus.webp" alt="" />
              </div>
                <div className="reach">
                <h4>Reach us</h4>
                <p><i className='bx bxs-phone'></i>+91 9000832512 <br />   +91 9963065687</p>
                <p><i className='bx bx-envelope' ></i> joelvarigeti77@gmail.com</p>
                </div>

                <div className="pages">
                    <h4>Pages</h4>
                    <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/location">Location</a></li>
            <li><a href="/ourtrust"> Programs</a></li>
            <li><a href="/events">Events</a></li>
                </div>

                <div className="icons">
                    <h4>Follow </h4>
<ul className="example-2">
 
  <li className="icon-content">
    <a
      href="https://www.instagram.com/joelvarigeti77?igsh=MXRsZ2dtdWhtaWw1Mw=="
      aria-label="Instagram"
      data-social="instagram"
    >
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-instagram"
        viewBox="0 0 16 16"
        xml:space="preserve"
      >
        <path
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">Instagram</div>
  </li>
  <li className="icon-content">
    <a href="https://youtube.com/@joelsilence?si=x9EuYdmUIxu3ri8p" aria-label="Youtube" data-social="youtube">
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-youtube"
        viewBox="0 0 16 16"
        xml:space="preserve"
      >
        <path
          d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">Youtube</div>
  </li>
</ul>

                </div>
          
        </div>
        <hr />
            <div className="copy">
                <p>Charity No. 1117019 | Registered in England & Wales No. 5996380.</p>
                <p>© 2025 Renewal Church. All rights reserved.</p>
        </div>
    
</div>
</div>

    </>
  );
}

export default Church;
