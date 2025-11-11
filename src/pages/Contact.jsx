import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact">

      {/* ===== 1) Banner ===== */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url('/b5.jpg')` }}
      >
        <div className="contact-hero__overlay" />
        <div className="container contact-hero__inner">
          <h1>Get In Touch With Us</h1>
        </div>
      </section>

      {/* ===== 2) Split (text left, image right) ===== */}
      <section className="contact-split container">
        <div className="split__copy">
          <h2 className="split__title">We’d Love To Hear From You!</h2>
          <p className="split__text">
            Please reach out to our Customer Care team with any questions you may
            have. To learn more about your prescrptions, refer to our FAQs page below.
          </p>
          <a href="#" className="btn-orange">FAQS</a>
        </div>
        <div className="split__media">
          <img src="/b12.jpg" alt="Smiling woman stretching" />
        </div>
      </section>

      {/* ===== 3) Form + Contact info ===== */}
      <section className="contact-panel container">
        <div className="cform">
          <label>
            <span className="lbl">*Your name</span>
            <input type="text" placeholder="ex. Mary Shield" required />
          </label>

          <label>
            <span className="lbl">*Email</span>
            <input type="email" placeholder="ex. mary@mail.com" required />
          </label>

          <label>
            <span className="lbl">*Please provide a brief description of the situation.</span>
            <textarea rows="7" placeholder="…" required />
          </label>

          <button className="btn-orange wide">Submit</button>
        </div>

        <div className="cdivider" aria-hidden />

        <div className="cinfo">
          <h3>Contact Info</h3>

          <div className="ci-row">
            <img className="ci-ico" src="/phone.png" alt="" />
            <p>+1 212 425 8617</p>
          </div>
          <p className="ci-muted">MON–FRI 8:00AM–5:00PM ET</p>

          <h4>Inquiries</h4>
          <div className="ci-row">
            <img className="ci-ico" src="/mail.png" alt="" />
            <p>info@pharmayouth.co.uk</p>
          </div>

          <h4>Address</h4>
          <div className="ci-row">
            <img className="ci-ico" src="/location.png" alt="" />
            <p>Unit1 27A, 6 Banastre Rd, Southport PR8 5AW</p>
          </div>
        </div>
      </section>

      {/* ===== 4) 3 cards section ===== */}
      <section className="contact-cards container">
        <div className="cc-head">
          <h2>We Create Balance Daily In<br/>People’s Lives.</h2>
          <p className="cc-sub">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
          </p>
        </div>

        <div className="cc-grid">
          <article className="cc-card">
            <h5>About Us</h5>
            <p>Neque porro quisquam est, qui dolorem ipsum.</p>
            <a href="#" className="learn">Learn more <span>→</span></a>
          </article>

          <article className="cc-card">
            <h5>Explore products</h5>
            <p>Neque porro quisquam est, qui dolorem ipsum.</p>
            <a href="#" className="learn">Learn more <span>→</span></a>
          </article>

          <article className="cc-card">
            <h5>Learn about Vitamins</h5>
            <p>Neque porro quisquam est, qui dolorem ipsum.</p>
            <a href="#" className="learn">Learn more <span>→</span></a>
          </article>
        </div>
      </section>

    </main>
  );
}
