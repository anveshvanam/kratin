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
        <label className="w-full text-2xl">
          Medicine Name:
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            className="border-[1px] w-1/2 border-black border-solid ml-6 h-10 px-3"
            placeholder="Medicine Name"
          />
        </label>
        <label className="w-full text-2xl">
          Dosage:
          <input
            type="text"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            placeholder="Dosage"
            className="border-[1px] w-1/2 border-black border-solid ml-10 h-10 px-3"
          />
        </label>
        <button
          type="submit"
          className="bg-black self-center text-white w-40 h-10 rounded-md"
        >
          Add Medicine
        </button>
      </form>
      <ul>
        {medicines.map((medicine, index) => (
          <li key={index}>
            <p>Name: {medicine.name}</p>
            <p>Dosage: {medicine.dosage}</p>
            <p>Frequency: {medicine.frequency}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddMedicine;
