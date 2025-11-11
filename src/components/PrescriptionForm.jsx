import React, { useState } from "react";
import "./PrescriptionForm.css";

export default function PrescriptionForm({ title, intro }) {
  const [files, setFiles] = useState([]);

  const onFileChange = (e) => {
    const f = Array.from(e.target.files || []);
    setFiles(f);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to your backend/email service
    // Use FormData to include files, e.g.:
    // const fd = new FormData(e.currentTarget);
    // files.forEach((f) => fd.append("attachments", f));
    // fetch("/api/prescriptions", { method: "POST", body: fd })
    alert("Submitted (demo)");
  };

  return (
    <section className="rx container">
      <header className="rx-head">
        <h2 className="rx-title">
          {title || "We're here to help! Order a prescription, ask a question"}
        </h2>
        <p className="rx-intro">
          {intro ||
            "You can order your repeat prescription from the pharmacy, please provide the details here. You can even upload an image of your prescription slip. We work with surgeries all over the UK. Allow 3–5 days for prescription to be issued."}
        </p>
      </header>

      <form className="rx-form" onSubmit={onSubmit}>
        {/* Row 1 */}
        <label className="rx-field">
          <span className="rx-label">*Patient Name</span>
          <input type="text" name="patientName" required placeholder="" />
        </label>

        <label className="rx-field">
          <span className="rx-label">Phone Number</span>
          <input name="phone" type="tel" placeholder="" />
        </label>

        <label className="rx-field">
          <span className="rx-label">Email</span>
          <input name="email" type="email" placeholder="" />
        </label>

        {/* Row 2 */}
        <label className="rx-field">
          <span className="rx-label">Date of Birth</span>
          <input name="dob" type="date" placeholder="dd/mm/yyyy" />
        </label>

        <label className="rx-field">
          <span className="rx-label">I would like to…</span>
          <select name="purpose" defaultValue="">
            <option value="" disabled hidden>
              Select an option
            </option>
            <option value="order">Order repeat prescription</option>
            <option value="question">Ask a question</option>
            <option value="advice">Request advice</option>
          </select>
        </label>

        <label className="rx-field">
          <span className="rx-label">Name of GP and Surgery (if applicable)</span>
          <select name="surgery" defaultValue="">
            <option value="" disabled hidden>
              Select surgery
            </option>
            <option value="surgery-1">Surgery 1</option>
            <option value="surgery-2">Surgery 2</option>
            <option value="other">Other / Not listed</option>
          </select>
        </label>

        {/* Row 3 */}
        <label className="rx-field">
          <span className="rx-label">Collect or Deliver Prescription?</span>
          <select name="collection" defaultValue="">
            <option value="" disabled hidden>
              Select one
            </option>
            <option value="collect">Collect from pharmacy</option>
            <option value="deliver">Deliver</option>
          </select>
        </label>

        <label className="rx-field rx-span2">
          <span className="rx-label">
            Reason for exemption from prescription charges (if applicable)
          </span>
          <input type="text" name="exemption" placeholder="" />
        </label>

        {/* Row 4: Message + Uploader */}
        <label className="rx-field">
          <span className="rx-label">Message</span>
          <textarea name="message" rows={4} placeholder=""></textarea>
        </label>

        <div className="rx-field rx-uploader">
          <span className="rx-label">Upload image (optional)</span>

          <label className="rx-drop" htmlFor="rxFiles">
            <input
              id="rxFiles"
              type="file"
              accept="image/*,application/pdf"
              multiple
              onChange={onFileChange}
            />
            <div className="rx-drop-inner">
              <strong>Click here</strong> to attach image of repeat slip / medicine list.
            </div>
          </label>

          {!!files.length && (
            <ul className="rx-files">
              {files.map((f, i) => (
                <li key={i}>{f.name}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Row 5: 3 consent blocks */}
        <label className="rx-consent">
          <input type="checkbox" name="isPatient" />
          <span>
            I am the patient named above/carer of the patient named above. Nomination has
            been explained to me and I have also been offered a leaflet that explains
            nomination.
          </span>
        </label>

        <label className="rx-consent">
          <input type="checkbox" name="nominate" />
          <span>
            I would like to nominate/have previously nominated CarePlus Chemist as my
            nominated pharmacy for dispensing prescriptions issued by the NHS Electronic
            Prescription Service.
          </span>
        </label>

        <label className="rx-consent">
          <input type="checkbox" name="contactOk" />
          <span>
            I agree to the pharmacy contacting me or my surgery in relation to any aspect
            of my prescription or general health.
          </span>
        </label>

        {/* Submit */}
        <div className="rx-actions rx-span3">
          <button className="rx-submit" type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}
