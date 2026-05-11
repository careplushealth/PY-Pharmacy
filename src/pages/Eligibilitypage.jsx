import React, { useState } from "react";
import "./Eligibilitypage.css";

export default function EligibilityPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    over18: false,
    agreeTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agreeTerms) {
      alert("Please agree to our T&Cs and privacy policy to continue.");
      return;
    }
    if (!form.over18) {
      alert("You must confirm you are over 18 years of age.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="ep-page">
        <div className="ep-success">
          <div className="ep-success-icon">✓</div>
          <h2 className="ep-success-title">Thank you!</h2>
          <p className="ep-success-msg">
            A member of our PharmaYouth clinic team will be in touch shortly to
            complete your Initial Eligibility Assessment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="ep-page">
      {/* Heading */}
      <div className="ep-hero">
        <h1 className="ep-heading">Am I eligible for medical cannabis?</h1>
        <p className="ep-sub">
          Please complete the contact form below to start your journey with PharmaYouth.
        </p>
        <p className="ep-sub">
          Once submitted, a member of our clinic team will call for your Initial
          Eligibility Assessment.
        </p>
      </div>

      {/* Form card */}
      <div className="ep-card">
        <form className="ep-form" onSubmit={handleSubmit} noValidate>
          <h2 className="ep-form-title">Your details</h2>

          {/* Name */}
          <div className="ep-field-group">
            <label className="ep-label">Name</label>
            <div className="ep-name-row">
              <div className="ep-name-col">
                <input
                  className="ep-input"
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  autoComplete="given-name"
                />
                <span className="ep-sublabel">First</span>
              </div>
              <div className="ep-name-col">
                <input
                  className="ep-input"
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  autoComplete="family-name"
                />
                <span className="ep-sublabel">Last</span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="ep-field-group">
            <label className="ep-label" htmlFor="ep-email">Email</label>
            <input
              className="ep-input"
              type="email"
              id="ep-email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          {/* Phone */}
          <div className="ep-field-group">
            <label className="ep-label" htmlFor="ep-phone">Phone</label>
            <div className="ep-phone-row">
              <div className="ep-phone-flag">
                <span>🇬🇧</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <input
                className="ep-input ep-input--phone"
                type="tel"
                id="ep-phone"
                name="phone"
                placeholder="07400 123456"
                value={form.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
              />
            </div>
          </div>

          {/* Legal Restrictions */}
          <div className="ep-field-group">
            <p className="ep-label">Legal Restrictions</p>

            <label className="ep-checkbox-row">
              <input
                className="ep-checkbox"
                type="checkbox"
                name="over18"
                checked={form.over18}
                onChange={handleChange}
              />
              <span className="ep-checkbox-label">I confirm that I am over 18 years of age.</span>
            </label>

            <label className="ep-checkbox-row">
              <input
                className="ep-checkbox"
                type="checkbox"
                name="agreeTerms"
                checked={form.agreeTerms}
                onChange={handleChange}
              />
              <span className="ep-checkbox-label">
                I agree to PharmaYouth's T&amp;Cs and privacy policy (Required)
              </span>
            </label>

            <div className="ep-info-box">
              <span className="ep-info-icon">ℹ</span>
              <p className="ep-info-text">
                Please click <a href="#terms" className="ep-info-link">here</a> to view
                our Terms &amp; Conditions. We are only able to onboard patients from the
                United Kingdom or the Channel Islands.
              </p>
            </div>
          </div>

          <button className="ep-submit" type="submit">Submit</button>
        </form>
      </div>

      {/* Trustpilot */}
    {/*  <div className="ep-trust">
        <span className="ep-trust-label">Excellent</span>
        <div className="ep-trust-stars">
          {[1,2,3,4].map(i => (
            <span key={i} className="ep-star ep-star--full">★</span>
          ))}
          <span className="ep-star ep-star--half">★</span>
        </div>
        <a href="#trustpilot" className="ep-trust-reviews">1,575 reviews on</a>
        <span className="ep-trust-tp">★ Trustpilot</span>
      </div>*/}
    </div>
  );
}