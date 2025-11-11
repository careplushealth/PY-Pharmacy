import React from "react";
import "./Home.css";
import PrescriptionForm from "../components/PrescriptionForm.jsx";



export default function Home(){
  return (
    <main>
      {/* Hero (Screenshot 1) */}
      <section className="hero" style={{backgroundImage:`url(${"./b3.jpg"})`}}>
        <div className="container hero-inner">
          <h1 className="h1">PharmaYouth delivers your<br/>prescription to your doorstep!</h1>
          <p className="p">Say goodbye to GP wait times & pharmacy queues</p>
          <button className="btn">Try out now</button>
        </div>
       <div className="pillbar">
  <div className="pill">
    <img src="/hospital.png" alt="Vitamins" className="ico" />
    Trusted NHS partner
  </div>
  <div className="pill">
    <img src="/pharmacy.png" alt="Collagen" className="ico" />
    Regulated pharmacy
  </div>
  <div className="pill">
    <img src="/rate.png" alt="Protein" className="ico" />
    Excellent rating
  </div>
  <div className="pill">
    <img src="/medical.png" alt="Essential Oils" className="ico" />
    Serving 300,000 patients
  </div>
</div>

      </section>

      {/* Categories grid (Screenshot 2) */}
      <section className="categories container">
        <div className="card text">
          <h2 className="h2">Everyday Health Support</h2>
          <p className="p">At PharmaYouth Pharmacy, we offer a range of vitamins and mineral supplements to support everyday wellbeing — from vitamin D and B12 to multivitamins and omega-3s.
Our pharmacists can guide you on choosing safe, effective products that fit your health needs and lifestyle.</p>
          <button className="btn">Explore Category</button>
        </div>
        <div className="card image"><img src={"./b6.jpg"} alt="Turmeric & Ginger"/></div>
        <div className="card image"><img src={"./b9.jpg"} alt="Essential Oils"/></div>
        <div className="card text">
          <h2 className="h2">Nutritional and Medical Powders</h2>
         <p className="p">We supply nutritional and medical powders such as protein blends, meal replacements, and rehydration salts.
Our pharmacists can advise on suitable options for recovery, hydration, or general nutrition support.</p>
          <button className="btn">Explore Category</button>
        </div>
      </section>

      {/* Advantages (Screenshot 3) */}
      <section className="advantages">
        <div className="container">
          <h2 className="title h2">Our Advantages</h2>
          <p className="subtitle p">PharmaYouth combines expert care with community focus — helping you manage your health safely and confidently.</p>
          <div className="grid">
            {[
              {t:'Healthy nails & hair', i:'🌿'},
              {t:'Pain relieve', i:'🦵'},
              {t:'Better sleep', i:'🌙'},
              {t:'Detox & Cleanse', i:'🌀'},
              {t:'Muscles support', i:'💪'},
              {t:'Immune support', i:'🛡️'},
            ].map((it,idx)=> (
              <div key={idx} className="adv">
                <div className="adv-ico" aria-hidden>{it.i}</div>
                <h3 className="adv-title">{it.t}</h3>
                <p className="p">Pharmacy-grade biotin and collagen supplements to support healthy hair, skin, and nails.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<PrescriptionForm />

    </main>
  );
}
