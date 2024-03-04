import React, { useState } from "react";

export default function Captcha(){
    const randomCaptcha = Math.random().toString(36).slice(8)
    const [captcha, setCaptcha] = useState(randomCaptcha)
    const [text, setText] = useState("")
    const [valid, setValid] = useState(false)

    const refreshString = () => {
        setCaptcha(Math.random().toString(36).slice(8))
    } 
    const macthCaptcha = (event) => {
        event.preventDefault()
        if(text === captcha) {
            setValid(true)
        }
    }
    return(
        <>
            <div>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <div>
                    {captcha}
                    </div>

                    <button className="border border-orange-700 p-2" 
                    onClick={() => refreshString()}>
                    new captcha
                    </button>
                    <form onSubmit={macthCaptcha}>
                        <input type="text" />
                    </form>
                </div>

            </div>
        </>
    )
}