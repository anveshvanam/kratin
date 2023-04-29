import { ImInfo } from "react-icons/im";
import AddMedicine from "../add-medicine";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center font-serif p-5">
      <div className="w-full flex flex-col text-2xl justify-center border-2 border-black p-4 gap-6 rounded-md lg:w-1/2 lg:p-10">
        <div className="flex items-center w-full flex-wrap lg:justify-center">
          <p className="before:content-['*'] before:ml-0.5 before:text-red-500 block font-medium">
            Click on
            <span className="mx-3 font-bold">Add Medication</span> to add
            Medication to the records
          </p>
        </div>
        <div className="flex items-center w-full flex-wrap lg:justify-center">
          <p className="before:content-['*'] before:ml-0.5 before:text-red-500 block font-medium ">
            Click on
            <span className="mx-3 font-bold"> Add Appointment</span> to add
            Appointment to the records
          </p>
        </div>
      </div>
      <div className="flex w-full mt-5 justify-between gap-5 lg:w-1/4 lg:mt-16 items-center">
        <button className="h-10 w-44 font-bold bg-white text-black border-black border-solid border-2">
          Add Medication
        </button>
        <button className="h-10 w-44 font-bold bg-gray-600 text-white border-0">
          Add Appointment
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 border-black border-2 w-full">
        <div className="flex justify-between w-full items-center">
          <h1 className="">Medicine name</h1>
          <p className="">Dose</p>
        </div>
      </div>
      <AddMedicine />
    </div>
  );
}

export default Home;
