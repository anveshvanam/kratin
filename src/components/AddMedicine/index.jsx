import React, { useState } from "react";
import axios from "axios";
function AddMedicine({ setAddMedication }) {
  const [medicines, setMedicines] = useState([]);
  const [medicineName, setMedicineName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");

  const handleMedicineSubmit = async (e) => {
    e.preventDefault();
    const newMedicine = {
      name: medicineName,
      dosage: dosage,
      username: "anvesh",
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFudmVzaCIsImlhdCI6MTY4Mjg0NTY4Mn0.sn7mLknyxicWxFKnX7P5nujNN4rxvCSHac-c8dDywg0`,
      },
      body: JSON.stringify(newMedicine),
    };
    const response = await fetch(
      "https://kratin-backend.onrender.com/medicine",
      options
    );
    const data = await response.json();
    console.log(response);
    console.log(data);
    window.location.reload();
  };

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleMedicineSubmit}
        className=" flex flex-col w-full justify-center items-start gap-5 shadow-lg p-7 lg:w-2/6"
      >
        <label className="w-full text-2xl">Medicine Name:</label>
        <input
          type="text"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
          className="border-[1px] w-full border-black border-solid   h-10 px-3"
          placeholder="Medicine Name"
          required
        />
        <label className="w-full text-2xl">Dosage:</label>
        <input
          type="text"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          placeholder="Dosage"
          className="border-[1px] w-full border-black border-solid h-10 px-3"
          required
        />
        <button
          type="submit"
          className="bg-black self-center text-white w-40 h-10 rounded-md"
        >
          Add Medicine
        </button>
      </form>
    </div>
  );
}

export default AddMedicine;
