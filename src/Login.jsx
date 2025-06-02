import React, { useState } from "react";
import "./Login.css";

const PrayerRequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    prayerForWhom: "",
    phoneNumber: "",
    language: "",
    prayerRequest: "",
    problem: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
    <div className="prayer-wrapper">
      {isSubmitted ? (
        <div className="confirmation">
          <div className="checkmark">✔</div>
          <h2>Dear {formData.fullName}</h2>
          <p className="subtext">We received your prayer request</p>
          <p className="telugu-subtext">మీ ప్రార్థన అభ్యర్థన మాకు అందింది</p>
          <p>
            Your prayer request regarding <strong>{formData.prayerRequest}</strong> to your <strong>{formData.prayerForWhom}</strong> is sent to the SILOAM CHIEF MINISTRIES prayer warriors. May the LORD help you!
          </p>
          <p>
            మీ ప్రార్థన అభ్యర్థన కోసం సిలోయం చీఫ్ మినిస్ట్రీస్ ప్రార్థన వారియర్స్ తీర ప్రార్థన చేయబడింది. దేవుడు మీకు తక్షణ సహాయం చేయును.
          </p>
          <button onClick={() => (window.location.href = "/Ourtrust")} className="back-btn">
            ← Back to Prayer Request
          </button>
        </div>
      ) : (
        <>
          <span className="back-link" onClick={() => window.history.back()}>&larr; Back</span>
          <br />
          <h2>Prayer Request:</h2> <br />
          <p>Please tell us your problem & get a call back from our prayer team.</p><br />

          <form onSubmit={onSubmit}>
            <div className="row">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
              <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
              <select name="prayerForWhom" value={formData.prayerForWhom} onChange={handleChange} required>
                <option value="">Prayer for Whom</option>
                <option value="Myself">Myself</option>
                <option value="Mother">Mother</option>
                <option value="Father">Father</option>
                <option value="Wife">Wife</option>
                <option value="Husband">Husband</option>
                <option value="Friend">Friend</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Daughter">Daughter</option>
                <option value="Son">Son</option>
                <option value="Uncle">Uncle</option>
                <option value="Aunty">Aunty</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="row">
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
              <select name="prayerRequest" value={formData.prayerRequest} onChange={handleChange} required>
                <option value="">Select Prayer Request</option>
                <option value="For Health">For Health</option>
                <option value="For Job">For Job</option>
                <option value="For Peace">For Peace</option>
                <option value="For Financial Breakthrough">For Financial Breakthrough</option>
                <option value="For Family">For Family</option>
                <option value="For Education">For Education</option>
                <option value="For Spiritual Growth">For Spiritual Growth</option>
                <option value="For Children">For Children</option>
                <option value="For Relationships">For Relationships</option>
                <option value="For Strengthening Faith">For Strengthening Faith</option>
                <option value="For Community">For Community</option>
                <option value="For Marriage">For Marriage</option>
              </select>
              <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
            <select name="language" value={formData.language} onChange={handleChange} required>
              <option value="">Select Language</option>
              <option value="Telugu">Telugu</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">Tamil</option>
              <option value="Kannada">Kannada</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Bengali">Bengali</option>
              <option value="Marathi">Marathi</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Urdu">Urdu</option>
              <option value="Odia">Odia</option>
              <option value="Assamese">Assamese</option>
              <option value="Maithili">Maithili</option>
            </select><br />
            <textarea name="problem" placeholder="Enter your Problem (max 150 words)" value={formData.problem} onChange={handleChange} maxLength="150" required></textarea><br />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
          <p>{result}</p>
        </>
      )}
    </div>
  );
};

export default PrayerRequestForm;
