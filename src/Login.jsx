import React, { useState } from "react";

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
      <div style={{ maxWidth: "600px", marginTop: "8%", padding: "20px", marginLeft: "30%" }}>
         {isSubmitted ? (
            <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
               <div style={{ fontSize: "50px", color: "green" }}>✔</div>
               <h2>Dear {formData.fullName}</h2>
               <p style={{ fontSize:"20px"}}>We received your prayer request</p> <br />
               <p style={{ fontSize:"20px", fontWeight:"600"}}>మీ ప్రార్థన అభ్యర్థన మాకు అందింది</p> <br />
               <p style={{ fontSize:"20px"}}>
                  Your prayer request regarding <strong>{formData.prayerRequest}</strong> is sent to the Siloam Chief Ministries
                  prayer warriors. They shall begin to pray for your problem now. May the LORD shall help you!
               </p> <br />
               <p style={{ fontSize:"15px"}}>
                  మీ ప్రార్థన అభ్యర్థన కోసం సిలోయం చీఫ్ మినిస్ట్రీస్ ప్రార్థన వారియర్స్ తీర ప్రార్థన చేయబడింది. దేవుడు మీకు
                  తక్షణ సహాయం చేయును.
               </p>
               <button
                  onClick={() => (window.location.href = "/Ourtrust")}
                  style={{
                     marginTop: "20px",
                     padding: "10px 20px",
                     background: "blue",
                     color: "white",
                     border: "none",
                     borderRadius: "5px",
                     cursor: "pointer",
                  }}
               >
                  ← Back to Prayer Request
               </button>
            </div>
         ) : (
            <>
               <span
                  style={{ marginBottom: "20px", color: "blue", fontSize: "25px", fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => window.history.back()}
               >
                  &larr; Back
               </span>
               <br />
               <br />
               <h2>Pray Request:</h2>
               <br />
               <p>Please tell us your problem & get a call back from our prayer team.</p>
               <br />
               <form onSubmit={handleSubmit}>
                  <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                     <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        style={{ flex: 1, padding: "10px" }}
                        required
                     />
                     <select
                        name="prayerForWhom"
                        value={formData.prayerForWhom}
                        onChange={handleChange}
                        style={{ flex: 1, padding: "10px" }}
                        required
                     >
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
                  <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                     <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        style={{ flex: 1, padding: "10px" }}
                        required
                     />
                     <div style={{ display: "flex", flex: 1, gap: "5px" }}>
                        <span style={{ padding: "10px", background: "#f0f0f0", border: "1px solid #ccc" }}>+91</span>
                        <input
                           type="text"
                           name="phoneNumber"
                           placeholder="Phone Number"
                           value={formData.phoneNumber}
                           onChange={handleChange}
                           style={{ flex: 1, padding: "10px" }}
                           required
                        />
                     </div>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                     <select
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "10px" }}
                        required
                     >
                        <option value="">Select Language</option>
                        <option value="Spanish">Telugu</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="French">Tamil</option>
                        <option value="German">Kannada</option>
                        <option value="Italian">Malayalam</option>
                        <option value="Chinese">Bengali</option>
                        <option value="Russian">Marathi</option>
                        <option value="Japanese">Gujarati</option>
                        <option value="Korean">Punjabi</option>
                        <option value="Arabic">Urdu</option>
                        <option value="Portuguese">Odia</option>
                        <option value="Turkish">Assamese</option>
                        <option value="Vietnamese">Maithili</option>
                        {/* Add more languages as needed */}
                     </select>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                     <textarea
                        name="prayerRequest"
                        placeholder="Enter Prayer Request in (600 words)"
                        value={formData.prayerRequest}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "10px", height: "100px" }}
                        maxLength="600"
                        required
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     style={{
                        width: "100%",
                        padding: "10px",
                        background: "blue",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                     }}
                  >
                     Submit
                  </button>
               </form>
            </>
         )}
      </div>
   );
};

export default PrayerRequestForm;
