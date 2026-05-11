import React from "react";
import "./Howitworks.css";

const steps = [
  {
    id: 1,
    color: "#5BBCF8",
    title: "Consultation",
    description:
      "Select Mavari as your preferred pharmacy and your doctor will forward your prescription straight to our team at the end of your appointment.",
    icon: "/icons/consultation.png",
  },
  {
    id: 2,
    color: "#2BBD8E",
    title: "ID Check",
    description:
      "We'll verify your identity quickly and securely before reviewing your prescription to make sure everything is in order.",
    icon: "/icons/id-check.png",
  },
  {
    id: 3,
    color: "#4A6FDC",
    title: "Payment",
    description:
      "We'll send a secure payment link straight to your inbox. As soon as your payment is confirmed, we'll get your medication ready to dispatch.",
    icon: "/icons/payment.png",
  },
  {
    id: 4,
    color: "#F5C842",
    title: "Prescriptions",
    description:
      "We'll need your original paper prescription from your doctor before we can process and send out your order.",
    icon: "/icons/prescriptions.png",
  },
  {
    id: 5,
    color: "#F27DAD",
    title: "Delivery",
    description:
      "Your medication is sent out via a fully tracked, signature-required courier service so it reaches you safely every time.",
    icon: "/icons/delivery.png",
  },
  {
    id: 6,
    color: "#ffffff",
    title: "Tracking",
    description:
      "Once your order is on its way, you can follow its progress in real time through your Mavari account.",
    icon: "/icons/tracking.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works__title">How Mavari Dispensary works:</h2>
      <div className="how-it-works__grid">
        {steps.map((step) => (
          <div className="how-it-works__step" key={step.id}>
            <div
              className="how-it-works__icon-circle"
              style={{ backgroundColor: step.color }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="how-it-works__icon-img"
              />
            </div>
            <div className="how-it-works__content">
              <h3 className="how-it-works__step-title">
                {step.id}. {step.title}
              </h3>
              <p className="how-it-works__step-desc">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}