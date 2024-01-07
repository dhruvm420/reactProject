import MyCard from "./mycard";
export default function DashboardCards({ dashboardData }) {
  console.log(dashboardData);
  return (
    <>
      <MyCard
        title="State"
        count={dashboardData.state}
        link="/statelist/superadmin"
      />
      <MyCard
        title="District"
        count={dashboardData.district}
        link="/districtlist/superadmin"
      />
      <MyCard
        title="Tehsil"
        count={dashboardData.tehsil}
        link="/tehsillist/superadmin"
      />
      <MyCard
        title="Panchayat"
        count={dashboardData.panchayat}
        link="/panchayatlist/superadmin"
      />
      <MyCard
        title="Verified Members"
        count={dashboardData.verifiedmembers}
        link="/verifiedmembers"
      />
      <MyCard
        title="Unverified Members"
        count={dashboardData.unverifiedmembers}
        link="/unverifiedmembers/superadmin"
      />
      <MyCard
        title="Complaints"
        count={dashboardData.complaints}
        link="/complaints"
      />
      <MyCard
        title="Testimonials"
        count={dashboardData.testimonials}
        link="/testimonials"
      />
      <MyCard
        title="Donations"
        count={dashboardData.donations}
        link="/donations"
      />
      <MyCard
        title="Contact Us"
        count={dashboardData.contactus}
        link="/contactus"
      />{" "}
    </>
  );
}
