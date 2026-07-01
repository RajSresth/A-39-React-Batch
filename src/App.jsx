import UserDetails from "./Day-1 jsx and components/UserDetails";
import UserInfo from "./Day-1 jsx and components/UserInfo";

const App = () => {
  const data1 = "Abra ka Dabra";

  return (
    <div id="app">
      <h1>App Component</h1>

      <UserDetails name="Shresth Rajput" age={27} data1={data1} />

      <UserInfo />
    </div>
  );
};

export default App;
