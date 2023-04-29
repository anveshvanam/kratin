function Landing() {
  return (
    <>
      <div className="bg-[#2c9eb8] h-screen flex flex-col items-center justify-center font-serif p-5">
        <h1 className="text-white text-center text-[2.5rem] m-5">
          Never forget to take your medications again - our simple website sends
          reminders to help seniors stay on track.
        </h1>
        <div className="flex items-center justify-center">
          <button className="bg-white text-black text-[1.5rem] px-5 py-2 rounded-md m-5">
            Login
          </button>
          <button className="bg-white text-black text-[1.5rem] px-5 py-2 rounded-md m-5">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
