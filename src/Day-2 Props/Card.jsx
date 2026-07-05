

const Card = (props) => {
    return <div>
        <h3>Fullname: {props.user.fullname}</h3>
        <h3>Age: {props.user.age}</h3>
        <h3>Team: {props.user.team}</h3>
    </div>
}

export default Card;


/**
 * props = {
           user: {
              fullname: "Virat Kohli",
              age:37,
              team: "RCB"
         }
 * } 
 */