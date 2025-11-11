import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="about">
      {/* ===== 1) Banner ===== */}
      <section className="about-hero" style={{ backgroundImage: `url('/b4.jpg')` }}>
        <div className="about-hero__overlay" />
        <div className="container about-hero__inner">
          <h1>About us</h1>
        </div>
      </section>

      {/* ===== 1b) Rich Text ===== */}
      <section className="about-rich container">
        <h2 className="about-rich__title">We Believe In Better</h2>
        <p className="about-rich__desc">
         PharmaYouth Pharmacy is a trusted, patient-focused community pharmacy dedicated to improving health and wellbeing through expert advice, high-quality care, and accessible treatment pathways. We offer a comprehensive range of NHS and private pharmacy services, including health consultations, prescriptions, and tailored wellbeing support. Our experienced pharmacists provide professional guidance on medicines, supplements, and over-the-counter care, helping patients make informed choices for a healthier life. At PharmaYouth, we combine innovation with compassion to make healthcare more personal, convenient, and reliable.
        </p>
      </section>

      {/* ===== 2) Split Section A (text left, image right) ===== */}
      <section className="split container">
        <div className="split__copy">
          <h3 className="split__title">We Create Balance Daily In People’s Lives.</h3>
          <p className="split__text">
            At PharmaYouth Pharmacy, we believe good health starts with the right support and everyday balance. Our mission is to make healthcare simple, accessible, and reassuring — whether through expert medication guidance, tailored treatment services, or holistic wellbeing advice
          </p>
          <a className="btn-outline" href="#">Learn more</a>
        </div>
        <div className="split__media">
          <img src="/b10.jpg" alt="Product bottles on table" />
        </div>
      </section>

      {/* ===== 2b) Split Section B (image left, text right) ===== */}
      <section className="split split--rev container">
        <div className="split__media">
          <img src="/b11.jpg" alt="Person taking a capsule" />
        </div>
        <div className="split__copy">
          <h3 className="split__title">Your Health, Our Priority Every Step of the Way</h3>
          <p className="split__text">
            Our team of qualified pharmacists and healthcare professionals are dedicated to providing safe, reliable, and compassionate care you can trust. From prescriptions to personalised health advice, we take the time to listen, understand, and support you with honesty and expertise — because your health deserves nothing less.
          </p>
          <a className="btn-outline" href="#">Learn more</a>
        </div>
      </section>

      {/* ===== 3) Advantages grid (6 cards) ===== */}
      <section className="about-advantages">
        <div className="container">
          <h2 className="about-adv__title">Our Advantages</h2>
          <p className="about-adv__subtitle">
            We use our knowledge and expertise to help you live your best life. This means creating
            plant-based wellness products that help people make the most of the good times
          </p>

          <div className="about-adv__grid">
            {[
              { t: "Healthy nails & hair", i: "/shield.png" },
              { t: "Pain relieve", i: "/shield.png" },
              { t: "Better sleep", i: "/shield.png" },
              { t: "Detox & Cleanse", i: "/shield.png" },
              { t: "Muscles support", i: "/shield.png" },
              { t: "Immune support", i: "/shield.png" },
            ].map((card, idx) => (
              <div className="about-adv__card" key={idx}>
                <img className="about-adv__icon" src={card.i} alt="" />
                <h4 className="about-adv__cardTitle">{card.t}</h4>
                <p className="about-adv__cardText">
                  We create balance daily in people’s lives with our products
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
