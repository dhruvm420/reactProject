import MyCard from "./mycard";
export default function DashboardCards(props) {
  return (
    <>
      <MyCard
        title="State"
        count={props.data["State"].count}
        link="/statelist"
      />
      <MyCard
        title="District"
        count={props.data["District"].count}
        link="/districtlist"
      />
      <MyCard
        title="Tehsil"
        count={props.data["Tehsil"].count}
        link="/tehsillist"
      />
      <MyCard
        title="Panchayat"
        count={props.data["Panchayat"].count}
        link="/panchayatlist"
      />
      <MyCard
        title="Verified Members"
        count={props.data["Verified Members"].count}
        link="/verifiedmembers"
      />
      <MyCard
        title="Unverified Members"
        count={props.data["Unverified Members"].count}
        link="/unverifiedmembers"
      />
      <MyCard
        title="Complaints"
        count={props.data["Complaints"].count}
        link="/complaints"
      />
      <MyCard
        title="Testimonials"
        count={props.data["Testimonials"].count}
        link="/testimonials"
      />
      <MyCard
        title="Donations"
        count={props.data["Donations"].count}
        link="/donations"
      />
      <MyCard
        title="Contact Us"
        count={props.data["Contact Us"].count}
        link="/contactus"
      />{" "}
      <MyCard
        title="Management"
        count={props.data["Management"].count}
        link="/management"
      />
      <MyCard
        title="Public User List"
        count={props.data["Public User List"].count}
        link="/publicuserlist"
      />
    </>
  );
}
