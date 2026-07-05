import Card from "./Card"

const UserDetails = () => {
  const users = [
    {
      fullname: "Virat Kohli",
      age:37,
      team: "RCB"
    },
    {
      fullname: "Ms Dhoni",
      age:43,
      team: "CSK"
    },
    {
      fullname: "Rohit Sharma",
      age:39,
      team: "MI"
    },
    {
      fullname: "Vaibhav Sooryavanshi",
      age:15,
      team: "RR"
    }
  ];

  return <div>
    {
      users.map((user,index) => <Card key={index} user={user} />)
    }
  </div>
}

export default UserDetails;