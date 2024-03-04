// import React from "react";
// import FormLogin from "../components/FormLogin";
// import FormCaptcha from "../components/FormCaptcha";

// export default function LoginPage() {
//   const { form, handleInput, handleLogin } = FormLogin();

//   return (
//     <>
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
//           <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
//           <form onSubmit={handleLogin}>
//             <div className="mb-4">
//               <label
//                 htmlFor="username"
//                 className="block text-sm font-medium text-black"
//               >
//                 Username
//               </label>
//               <input
//                 onChange={handleInput}
//                 value={form.username}
//                 id="username"
//                 type="text"
//                 className="mt-1 p-2 w-full border rounded-md bg-white text-black"
//                 name="username"
//                 required=""
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-black"
//               >
//                 Password
//               </label>
//               <input
//                 value={form.password}
//                 id="password"
//                 onChange={handleInput}
//                 type="password"
//                 className="mt-1 p-2 w-full border rounded-md bg-white text-black"
//                 name="password"
//                 required=""
//               />
//             </div>

//             <div className="mb-4">
//               <FormCaptcha />
//             </div>

//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="w-full p-2 bg-blue-500 text-white rounded-md"
//               >
//                 SUBMIT
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import FormLogin from "../components/FormLogin";
import FormCaptcha from "../components/FormCaptcha";

export default function LoginPage() {
  const { form, handleInput, handleLogin, captchaValid, setCaptchaValid } = FormLogin();

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-black"
              >
                Username
              </label>
              <input
                onChange={handleInput}
                value={form.username}
                id="username"
                type="text"
                className="mt-1 p-2 w-full border rounded-md bg-white text-black"
                name="username"
                required=""
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                value={form.password}
                id="password"
                onChange={handleInput}
                type="password"
                className="mt-1 p-2 w-full border rounded-md bg-white text-black"
                name="password"
                required=""
              />
            </div>

            <div className="mb-4">
              <FormCaptcha captchaValid={captchaValid} setCaptchaValid={setCaptchaValid} />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-md"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
