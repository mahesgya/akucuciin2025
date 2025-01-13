import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function ResetPassEmailPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_BASE_BACKEND_URL}/request-reset-password`, {
        email,
      });

      await sleep(1000);
      setIsLoading(false);
      setMessage("Silakan cek email Anda untuk instruksi reset password.");
      setMessage2(true)
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        setMessage(error.response.data.message || "Terjadi kesalahan, coba lagi.");
      } else {
        setMessage("Gagal terhubung ke server. Coba lagi nanti.");
      }
    }
  };

  return (
    <div>
      <div className="h-screen w-screen flex flex-col items-center justify-start mx-[0.5em] mt-[3em] space-y-8">
        <img src="/Images/LogoAkucuciin.png" alt="logo" className="w-[9rem]" />
        <div className="flex flex-col items-center justify-center space-y-5">
          <h4 className="font-sans font-semibold text-[20px] text-gray55 text-center">Silahkan Masukkan Email Anda untuk Reset Password</h4>
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col align-center justify-center items-center">
            <div className=" flex flex-row space-x-1 font-sans bg-birumuda p-[10px] py-[10px] rounded-lg w-[20rem]">
              <img src="/Images/emailReg2.png" alt="" className="w-[25px]" />
              <input required type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full font-sans focus:outline-none bg-birumuda focus:border-b-2" />
            </div>
            <button
              type="submit"
              className={`shadow-md font-sans w-[10rem] ${
                isLoading ? "bg-gray-400 text-gray-600 cursor-not-allowed" : "bg-blue-500 text-white"
              } text-white font-semibold py-4 px-4 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </form>
          {message2 && (
            <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-lg w-[90%] max-w-md">
                <p className="text-gray-600 text-center">Silakan cek email Anda untuk reset password</p>
                <Link className="self-center mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg " to="/">
                  Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResetPassEmailPage;
