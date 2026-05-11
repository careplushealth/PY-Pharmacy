import React from "react";
import "./Footer.css";



export default function Footer(){
return (
<footer className="site-footer">
{/* Newsletter banner from Screenshot 4 */}
<section className="newsletter container">
  <div className="nl-text">
    <h2 className="h2">Join Our Family!</h2>
    <p className="p">Be the first to know about our latest products and offers! As a welcome gift, we’ll give you a 30% off coupon.</p>
    <form className="nl-form" onSubmit={e=>e.preventDefault()}>
      <input type="email" placeholder="Your e-mail" required/>
      <button className="btn">Subscribe</button>
    </form>
  </div>
  <div className="nl-image"><img src="/b1.jpg" alt="Smiling person holding a capsule"/></div>
</section>



{/* Dark green footer */}
<section className="footer-main">
<div className="container footgrid">
<div className="brandcol">
<a href="https://twitter.com" className="brand dark">
  <img src="/logo-light.png" alt="Mavari Pharmacy logo" className="footer-logo" />
</a>
<p className="p light">Everything you need for better health.</p>
<div className="socials">
<a href="./twiter.com" aria-label="Twitter">𝕏</a>
<a href="./instagram.com" aria-label="Instagram">⌁</a>
<a href="./facebook.com" aria-label="Facebook">f</a>
</div>
</div>
<div>
<h4>Pharmacy</h4>
<ul>
<li><a href="./twiter.com">GPhC Registered Owner: Mavari Pharmacy</a></li>
<li><a href="./twiter.com">GPhC Registration Number: XXXXXXX</a></li>
<li><a href="./twiter.com">
Unit 1 27A Banastre Road
Southport PR8 5AW</a></li>
<li><a href="./twiter.com">SI Pharmacist:<br></br>
Mehraan Sattar</a></li>
</ul>
</div>
<div>
<h4>About</h4>
<ul>
{/* <li><a href="./about">About Us</a></li> */}
<li><a href="./contact">Our Team</a></li>
<li><a href="./contact">Blog</a></li>
<li><a href="./contact">Testimonials</a></li>
</ul>
</div>
<div>
<h4>Customer Care</h4>
<ul>
<li><a href="./contact">Contact us</a></li>
<li><a href="./contact">FAQs</a></li>
<li><a href="./contact">Returns & Exchanges</a></li>
<li><a href="./contact">Support</a></li>
</ul>
</div>
<div className="contactcol">
<p className="p light"><strong>Unit 1, 27a Banastre Rd,<br/>Southport PR8 5AW</strong></p>
<p className="p light"><strong>(777) 000‑1111</strong></p>
</div>
</div>
<div className="container footnote">
<p>© Mavari Pharmacy {new Date().getFullYear()}. All Rights Reserved.</p>
<p>
  Designed by <a href="https://visualab.uk" target="_blank" rel="noopener noreferrer">Visualab</a>
</p>

</div>
</section>
</footer>
);
}