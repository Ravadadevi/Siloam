import React, { useState } from "react";
import "./Login.css"; 

const PrayerRequestForm = () => {
   const [formData, setFormData] = useState({
      fullName: "",
      city: "",
      prayerForWhom: "",
      phoneNumber: "",
      language: "",
      prayerRequest: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const [isSubmitted, setIsSubmitted] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data Submitted:", formData);
      setIsSubmitted(true);
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
                  Your prayer request regarding <strong>{formData.prayerRequest}</strong> is sent to the SILOAM CHIEF MINISTRIES
                  prayer warriors. They shall begin to pray for your problem now. May the LORD help you!
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
               <span className="back-link" onClick={() => window.history.back()}>
                  &larr; Back
               </span>
               <br />
               <h2>Pray Request:</h2> <br />
               <p>Please tell us your problem & get a call back from our prayer team.</p> <br />
               <form onSubmit={handleSubmit}>
                  <div className="row">
                     <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
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
                  </select>
                  <textarea
                     name="prayerRequest"
                     placeholder="Enter Prayer Request (max 150 words)"
                     value={formData.prayerRequest}
                     onChange={handleChange}
                     maxLength="150"
                     required
                  ></textarea> <br />
                  <button type="submit" className="submit-btn">Submit</button>
               </form>
            </>
         )}
      </div>
   );
};

export default PrayerRequestForm;
