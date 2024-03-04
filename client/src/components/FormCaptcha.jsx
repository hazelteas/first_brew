import React, { useState } from "react";

export default function FormCaptcha() {
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);

  const refreshString = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };

  const matchCaptcha = (event) => {
    event.preventDefault();
    if (text === captcha) {
      setValid(false);
      setSuccess(true);
    } else {
      setValid(true);
      setSuccess(false);
    }
  };

  return (
    <div className="bg-white text-black p-4 m-0 h-full flex flex-col items-center justify-center">
      {success && (
        <div className="mb-4 p-2 bg-green-100 text-green-600 border border-green-400 rounded">
          <p>Success</p>
        </div>
      )}
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Validate Captcha</h1>
        <div className="flex items-center mb-4">
          <div className="text-3xl font-bold mr-4">{captcha}</div>
          <button
            className="p-2 bg-blue-500 text-white rounded"
            onClick={refreshString}
          >
            Refresh
          </button>
        </div>

        <form onSubmit={matchCaptcha} className="flex flex-col items-center">
          <input
            className={`border rounded p-2 mb-2 text-black bg-white ${
              valid ? "border-red-500" : ""
            }`}
            placeholder="Enter Captcha"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {valid && (
            <p className="text-red-500 mb-2">
              Invalid Captcha. Please try again.
            </p>
          )}
          <button className="p-2 bg-green-500 text-white rounded" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
