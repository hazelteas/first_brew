// // import React, { useState } from "react";
// // import axios from "axios";
// // import swal from "sweetalert";
// // import { useNavigate } from "react-router-dom";
// // import { URL_DATA } from "../CONSTANT";

// // export default function FormLogin() {
// //   const navigate = useNavigate();
// //   const [form, setForm] = useState({ username: "", password: "" });

// //   function handleInput(event) {
// //     setForm((prev) => {
// //       return { ...prev, [event.target.name]: event.target.value };
// //     });
// //   }

// //   async function handleLogin(event) {
// //     try {
// //       event.preventDefault();
// //       const { data } = await axios({
// //         method: "post",
// //         url: URL_DATA + "/login",
// //         data: { username: form.username, password: form.password },
// //       });
      
// //       navigate("/");
// //     } catch (error) {
// //       swal("Login Failed", error.response.data.message, "error");
// //     }
// //   }

// //   return { form, handleInput, handleLogin };
// // }


// import React, { useState } from "react";
// import axios from "axios";
// import swal from "sweetalert";
// import { useNavigate } from "react-router-dom";
// import { URL_DATA } from "../CONSTANT";
// import FormCaptcha from "./FormCaptcha";

// export default function FormLogin() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ username: "", password: "" });
//   const [captchaValid, setCaptchaValid] = useState(true);

//   function handleInput(event) {
//     setForm((prev) => {
//       return { ...prev, [event.target.name]: event.target.value };
//     });
//   }

//   async function handleLogin(event) {
//     try {
//       event.preventDefault();

//       if (captchaValid) {
//         const { data } = await axios({
//           method: "post",
//           url: URL_DATA + "/login",
//           data: { username: form.username, password: form.password },
//         });

//         navigate("/");
//       } else {
//         swal("Login Failed", "Invalid captcha. Please try again.", "error");
//       }
//     } catch (error) {
//       swal("Login Failed", error.response.data.message, "error");
//     }
//   }

//   return { form, handleInput, handleLogin, captchaValid, setCaptchaValid };
// }


import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { URL_DATA } from "../CONSTANT";
import FormCaptcha from "./FormCaptcha";

export default function FormLogin() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({ username: "", password: "" });
  const [captchaValid, setCaptchaValid] = React.useState(true); // Added captchaValid state

  function handleInput(event) {
    setForm((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  async function handleLogin(event) {
    try {
      event.preventDefault();

      if (captchaValid) {
        const { data } = await axios({
          method: "post",
          url: URL_DATA + "/login",
          data: { username: form.username, password: form.password },
        });
        localStorage.setItem("authorization", data.token);
        swal("Success!", "Login Success!");
        navigate("/getUser");
      } else {
        swal("Login Failed", "Invalid captcha. Please try again.", "error");
      }
    } catch (error) {
      swal("Login Failed", error.response.data.message, "error");
    }
  }

  return { form, handleInput, handleLogin, captchaValid, setCaptchaValid }; 
}
