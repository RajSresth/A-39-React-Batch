// Render Prop Pattern

const Pattern2 = ({ render }) => {
  return (
    <div>
      <h3>Render Prop Pattern</h3>
      {render("Spiderman", "Batman")}
    </div>
  );
};

export default Pattern2;
