

const UserInfo = () => {

    const obj = {
        city: "Noida",
        state: "UP",
        pincode: 201301,
    } 

    const hobbies = ["Traveling", "Cooking"]

    return <div>
        <h2>User Info</h2>
        <h3>City: {obj.city}</h3>
        <h3>State: {obj.state}</h3>
        <h3>Pincode: {obj.pincode}</h3>
        <h3>Hobbies: {hobbies.join(" ")}</h3>
    </div>
}

export default UserInfo;