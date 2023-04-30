import React, { useState } from "react";

function AddMedicine() {
  const [medicines, setMedicines] = useState([]);

  const [medicineName, setMedicineName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");

  const handleMedicineSubmit = (e) => {
    e.preventDefault();
    const newMedicine = {
      name: medicineName,
      dosage: dosage,
      frequency: frequency,
    };
    setMedicines([...medicines, newMedicine]);
    setMedicineName("");
    setDosage("");
    setFrequency("");
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
        />
        <label className="w-full text-2xl">Dosage:</label>
        <input
          type="text"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          placeholder="Dosage"
          className="border-[1px] w-full border-black border-solid h-10 px-3"
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
