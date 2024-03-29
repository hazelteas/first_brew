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
    <div>
        {success && (
          <Alert
          variant="outlined"
          sx={{marginBottom: "20px"}}
          >
          successful
          </Alert>
        )}
        <div>
          <CardHeader title="Validate Captcha" />
          <Divider />

          <CardContent>
            <CardActions>
              <div className="text-white">
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
              className="text-white"
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
