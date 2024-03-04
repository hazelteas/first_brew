import GetUsers from "../components/GetUsers";
import NavbarLogin from "../components/NavbarLogin";

export default function UserPage(){
    return(
        <div>
            <NavbarLogin/>
            <GetUsers/>
        </div>
    )
}