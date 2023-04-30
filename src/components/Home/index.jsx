import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import AddMedicine from "../AddMedicine";

function Home({}) {
  const [medicines, setMedicines] = useState([]);
  const [addMedication, setAddMedication] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://kratin-backend.onrender.com/medicines/anvesh",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      console.log(response);
      const data = await response.json();
      setMedicines(data);
    };
    fetchData();
  }, []);

  const deleteTodayMedicine = (id) => {
    axios
      .delete(`https://kratin-backend.onrender.com/today_medicine/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        // Handle successful response
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
    window.location.reload();
  };

  const deleteMedicine = (id) => {
    axios
      .delete(`https://kratin-backend.onrender.com/today_medicine/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        // Handle successful response
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
    window.location.reload();
  };

  const addMedicationHandler = () => {
    setAddMedication(true);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center font-serif p-5">
        <div className="w-full flex flex-col text-2xl justify-center border-2 border-black p-4 gap-6 rounded-md lg:w-1/2 lg:p-10">
          <div className="flex items-center w-full flex-wrap lg:justify-center">
            <p className="before:content-['*'] before:ml-0.5 before:text-red-500 block font-medium">
              Click on
              <span className="mx-3 font-bold">Add Medication</span> to add
              Medication to the records
            </p>
          </div>
        </div>
        {!addMedication && (
          <div className="flex w-full mt-5 justify-between gap-5 lg:w-1/4 lg:mt-16 items-center">
            <button
              onClick={addMedicationHandler}
              className="h-10 w-44 font-bold bg-black text-white rounded-md border-black border-solid border-2 self-center"
            >
              Add Medication
            </button>
          </div>
        )}

        {addMedication && <AddMedicine setAddMedication={setAddMedication} />}
        <ul className="w-full flex flex-col mt-5">
          {medicines.map((medicine) => (
            <li
              key={medicine.id}
              className="flex border-2 border-black p-2 rounded-md w-full items-center mb-4 lg:w-1/3 self-center"
            >
              <img
                src="https://res.cloudinary.com/dq9eefxnb/image/upload/v1682851121/medicine_cxtn86.png"
                alt="medicine"
                className="w-12 h-12"
              />
              <div className="flex flex-col ml-8 w-full">
                <div>
                  <h2>{medicine.name}</h2>
                  <p>dosage: {medicine.dosage}</p>
                </div>
                <div className="flex justify-between w-full mt-5">
                  <button
                    type="button"
                    className="bg-black text-white w-24 h-8 rounded-md"
                    onClick={() => deleteTodayMedicine(medicine.id)}
                  >
                    Done
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 text-white w-24 h-8 rounded-md"
                    onClick={() => deleteMedicine(medicine.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
