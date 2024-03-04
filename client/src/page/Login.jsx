import FormLogin from "../components/FormLogin";
import Captcha from "../components/captcha";

export default function Login(){
    return(
        <div>
            <FormLogin/>
            <Captcha/>
            <button className="bg-white-200 border-slate-500">
                submit
            </button>
        </div>
    )
}