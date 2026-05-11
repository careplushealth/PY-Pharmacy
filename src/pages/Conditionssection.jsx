import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Conditionssection.css";

const categories = [
  {
    id: "pain",
    label: "Pain",
    icon: "⚡",
    image: "/pain.jpg",
    desc: "Medical cannabis offers a meaningful alternative for those living with persistent pain — working with the body's own systems to ease discomfort, reduce inflammation, and restore quality of daily life without the risks tied to long-term opioid use.",
    conditions: ["Arthritis", "Back pain & Sciatica", "Cancer-related pain", "Chronic pain", "Endometriosis", "Fibromyalgia", "Insomnia", "Complex regional pain"],
    symptoms: ["Reduced quality of life", "Low mood", "Sleep disruption", "Loss of appetite", "Tremors", "Fatigue", "Inflammation", "Nerve sensitivity"],
  },
  {
    id: "neurological",
    label: "Neurological",
    icon: "🧠",
    image: "/neurological.jpg",
    desc: "For neurological conditions, medical cannabis can help regulate nerve signals, reduce seizure frequency, and ease debilitating symptoms that impact daily functioning — with many patients reporting significant improvements in both physical and cognitive wellbeing.",
    conditions: ["Epilepsy", "Multiple Sclerosis", "Parkinson's", "Tourette syndrome", "Migraine", "Neuropathy", "Dystonia", "Cerebral Palsy"],
    symptoms: ["Seizures", "Muscle spasms", "Tremors", "Cognitive impairment", "Chronic headaches", "Nerve pain", "Motor difficulties", "Memory issues"],
  },
  {
    id: "psychiatric",
    label: "Psychiatric",
    icon: "🧩",
    image: "/psychiatric.jpg",
    desc: "Psychiatric conditions are often complex to treat with conventional medication alone. Medical cannabis provides an additional pathway for managing anxiety, mood disorders, and PTSD — helping patients find greater stability and calm in everyday life.",
    conditions: ["PTSD", "Anxiety disorders", "Depression", "ADHD", "Bipolar disorder", "OCD", "Phobias", "Panic disorder"],
    symptoms: ["Persistent anxiety", "Low mood", "Hyperactivity", "Intrusive thoughts", "Sleep problems", "Mood swings", "Restlessness", "Emotional dysregulation"],
  },
  {
    id: "gastrointestinal",
    label: "Gastrointestinal",
    icon: "🫁",
    image: "/gastrointestinal.jpg",
    desc: "The gut and the endocannabinoid system are closely linked. Medical cannabis can calm inflammation, ease nausea, and regulate digestive function — providing meaningful relief for those managing long-term GI conditions.",
    conditions: ["Crohn's disease", "IBS", "Ulcerative colitis", "Gastroparesis", "Chronic nausea", "Coeliac disease", "Diverticulitis", "GERD"],
    symptoms: ["Nausea", "Abdominal pain", "Bloating", "Poor appetite", "Diarrhoea", "Cramping", "Inflammation", "Weight loss"],
  },
  {
    id: "palliative",
    label: "Palliative",
    icon: "🤍",
    image: "/palliative.jpg",
    desc: "In palliative care, quality of life is the priority. Medical cannabis can ease pain, reduce treatment-related nausea, improve sleep, and bring comfort during the most challenging stages — supporting patients and families alike.",
    conditions: ["Terminal cancer", "End-stage COPD", "Advanced heart failure", "ALS", "End-stage kidney disease", "Advanced dementia", "Liver failure", "Severe COPD"],
    symptoms: ["Severe pain", "Chemotherapy nausea", "Cachexia", "Breathlessness", "Extreme fatigue", "Anxiety", "Depression", "Insomnia"],
  },
  {
    id: "complex",
    label: "Complex",
    icon: "⚙️",
    image: "/complex.jpg",
    desc: "Some conditions don't fit neatly into one category. Medical cannabis is increasingly recognised for its role in managing complex, overlapping conditions that have proven resistant to standard treatment pathways.",
    conditions: ["Ehlers-Danlos syndrome", "Lupus", "Fibromyalgia", "POTS", "Long COVID", "Mast cell activation", "Complex regional pain", "Lyme disease"],
    symptoms: ["Widespread pain", "Fatigue", "Brain fog", "Joint instability", "Autonomic dysfunction", "Hypersensitivity", "Immune dysregulation", "Insomnia"],
  },
  {
    id: "womens",
    label: "Women's Health",
    icon: "♀️",
    image: "/womens-health.jpg",
    desc: "Women's health conditions are often undertreated. Medical cannabis shows real promise in addressing hormonal pain, menstrual disorders, and complex symptoms affecting women across different life stages.",
    conditions: ["Endometriosis", "PCOS", "Dysmenorrhoea", "Menopause symptoms", "Vulvodynia", "Interstitial cystitis", "PMS / PMDD", "Pelvic floor disorders"],
    symptoms: ["Pelvic pain", "Hormonal mood changes", "Hot flushes", "Painful periods", "Sleep disruption", "Anxiety", "Bloating", "Fatigue"],
  },
];

export default function ConditionsSection() {
  const [active, setActive] = useState("pain");
  const cat = categories.find((c) => c.id === active);

  return (
    <section className="cs2-section">
      {/* Header */}
      <div className="cs2-header">
        <div className="cs2-header-text">
          <h2 className="cs2-heading">Conditions medical cannabis can help with</h2>
          <p className="cs2-subheading">
            Explore the clinical areas our Mavari team supports.
          </p>
        </div>
        
      </div>

      {/* Pill nav */}
      <nav className="cs2-nav" aria-label="Condition categories">
        {categories.map((c) => (
          <button
            key={c.id}
            className={`cs2-nav-btn${active === c.id ? " cs2-nav-btn--active" : ""}`}
            onClick={() => setActive(c.id)}
            aria-pressed={active === c.id}
          >
            <span className="cs2-nav-icon" aria-hidden="true">{c.icon}</span>
            {c.label}
          </button>
        ))}
      </nav>

      {/* Card */}
      <div className="cs2-card" key={active}>
        {/* Top: image + description */}
        <div className="cs2-card-top">
          <div className="cs2-image-pane">
            <img
              src={cat.image}
              alt={`${cat.label} conditions`}
              className="cs2-image"
            />
            <div className="cs2-image-label">
              <span aria-hidden="true">{cat.icon}</span>
              {cat.label} Conditions
            </div>
          </div>

          <div className="cs2-desc-pane">
            <h3 className="cs2-panel-title">{cat.label}</h3>
            <p className="cs2-panel-desc">{cat.desc}</p>
            <div className="cs2-actions">
              <Link to="/eligibility" className="cs2-btn-outline">Am I eligible?</Link>

              <a href="#learn" className="cs2-btn-text">Learn more →</a>
            </div>
          </div>
        </div>

        {/* Bottom: conditions + symptoms tags */}
        <div className="cs2-card-bottom">
          <div className="cs2-tag-pane">
            <h4 className="cs2-tag-heading">
              <span className="cs2-dot cs2-dot--amber" />
              Conditions
            </h4>
            <div className="cs2-tags">
              {cat.conditions.map((item) => (
                <span className="cs2-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="cs2-tag-pane">
            <h4 className="cs2-tag-heading">
              <span className="cs2-dot cs2-dot--pink" />
              Symptoms
            </h4>
            <div className="cs2-tags">
              {cat.symptoms.map((item) => (
                <span className="cs2-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}