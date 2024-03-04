import React from "react";
import {
  Alert,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh"
import { useState } from "react";

export default function Captcha() {
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false)

  const refreshString = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };
  const macthCaptcha = (event) => {
    event.preventDefault();
    if (text === captcha) {
      setValid(false);
      setSuccess(true)
    } else {
      setValid(true)
      setSuccess(false)
    }
  };
  return (
    <div className="bg-white text-black p-1 m-0 max-h-full min-h-full flex flex-col">
        {success && (
          <Alert
          variant="outlined"
          sx={{marginBottom: "20px"}}
          >
          successful
          </Alert>
        )}
        <div className="justify-center">
          <CardHeader title="Validate Captcha" />
          <Divider />

          <CardContent>
            <CardActions>
              <div className="">
                {captcha}
                <button
                  startIcon={<RefreshIcon/>}
                  onClick={() => refreshString()}
                ></button>
              </div>
            </CardActions>
            <form onSubmit={macthCaptcha}>
              <TextField 
              label="Enter Captcha"
              focused
              value={text}
              onChange={(e) => setText(e.target.value)}
              error={valid}
              color="success"
              helperText={valid && "Invalid Captcha"}
              />
            <button
              type="submit"
              >
              SUBMIT
            </button>
              </form>
          </CardContent>
        </div>
    </div>
  );
}
