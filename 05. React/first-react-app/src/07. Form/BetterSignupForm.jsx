import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleSubmit = () => {
    console.log(formData);
  };
  const handleChange = (e) => {
    const changedField = e.target.name;
    const newValue = e.target.value;
    setFormData((currData) => {
      currData[changedField] = newValue;
      return { ...currData };
    });
  };
  
  return (
    <div>
      <section>
        <label htmlFor="firstName">Enter your first name</label>
        <input
          type="text"
          placeholder="firstName"
          id="firstName"
          value={formData.firstName}
          name="firstName"
          onChange={handleChange}
        />
      </section>
      <section>
        <label htmlFor="lastName">Enter the last name</label>
        <input
          type="text"
          placeholder="lastName"
          id="lastName"
          value={formData.lastName}
          name="lastName"
          onChange={handleChange}
        />
      </section>
      <button onClick={handleSubmit}>Submit!</button>
    </div>
  );
}

export default SignupForm;
