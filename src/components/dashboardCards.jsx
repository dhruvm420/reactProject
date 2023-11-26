import MyCard from "./mycard";
import { Link } from "react-router-dom";
export default function DashboardCards(props)
{
    return (<>
    <Link to ="/statelist"><MyCard title="State" count={props.data["State"].count} /> </Link>
    <Link to ="/districtlist"><MyCard title="District" count={props.data["District"].count} /> </Link>
    <Link to ="/tehsillist"><MyCard title="Tehsil" count={props.data["Tehsil"].count} /> </Link>
    <Link to ="/panchayatlist"><MyCard title="Panchayat" count={props.data["Panchayat"].count} /> </Link>
    <Link to ="/verifiedmembers"><MyCard title="Verified Members" count={props.data["Verified Members"].count} /> </Link>
    <Link to ="/unverifiedmembers"><MyCard title="Unverified Members" count={props.data["Unverified Members"].count} /> </Link>
    <Link to ="/complaints"><MyCard title="Complaints" count={props.data["Complaints"].count} /> </Link>
    <Link to ="/testimonials"><MyCard title="Testimonials" count={props.data["Testimonials"].count} /> </Link>
    <Link to ="/donations"><MyCard title="Donations" count={props.data["Donations"].count} /> </Link>
    <Link to ="/contactus"><MyCard title="Contact Us" count={props.data["Contact Us"].count} /> </Link>
    <Link to ="/management"><MyCard title="Management" count={props.data["Management"].count} /> </Link>
    <Link to ="/publicuserlist"><MyCard title="Public User List" count={props.data["Public User List"].count} /> </Link>
  </>);
}