// Default Props pattern

const Pattern1 = ({
  fullname = "Chombu",
  team = "qsp",
  jersyNo = 777,
  image = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
}) => {
  return (
    <div>
      <div className="profile">
        <img src={image} alt="" />
      </div>

      <div className="info">
        <div>{fullname}</div>
        <div>{jersyNo}</div>
        <div>{team}</div>
      </div>
    </div>
  );
};

export default Pattern1;
