import { Link } from "react-router-dom";
import DropDownMenu from "./dropdownmenu";

export default function Header(){
    return(
        <div className="siteheader">
            <Link to={"/"}>
                <button className="header">DARE NIGHT</button>
            </Link>
            <DropDownMenu/>
        </div>
    )
}