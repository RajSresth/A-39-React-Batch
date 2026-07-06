// Render Prop Pattern

const Pattern2 = ({ render }) => {
  return (
    <div>
      <h3>Render Prop Pattern</h3>
      {render()}
    </div>
  );
};

export default Pattern2;
