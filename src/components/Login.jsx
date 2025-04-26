import React, { useState } from "react";
import { supabase } from "../Supabase";

function Login() {
   const [phone, setPhone] = useState("");
       const [otp, setOtp] = useState("");
       const [step, setStep] = useState("enter-phone");

    const formattedPhone = phone.startsWith("+91") ? phone : "+91" + phone;
    
        const handleSendOtp = async () => {
            const { error } = await supabase.auth.signInWithOtp({ phone:formattedPhone });
            if (!error) setStep("enter-otp");
        };
    
        const handleVerifyOtp = async () => {
            const { data, error } = await supabase.auth.verifyOtp({
                phone:formattedPhone,
                token: otp,
                type: "sms",
            });
            if (!error) {
                alert("Login Success");
                sessionStorage.setItem("isLoggedIn", "true");
                window.location.href = "./Restaurant"
            } else {
                alert("Please check your otp")
            }
           
        };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login with Mobile</h2>

                {step === "enter-phone" ? (
                    <>
                        <input
                            type="text"
                            placeholder="Enter Mobile Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full border border-gray-300 rounded p-2 mb-4"
                        />
                        <button
                            onClick={handleSendOtp}
                            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                        >
                            Send OTP
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full border border-gray-300 rounded p-2 mb-4"
                        />
                        <button
                            onClick={handleVerifyOtp}
                            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                        >
                            Verify OTP
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Login;
