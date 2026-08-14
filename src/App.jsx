import { RouterProvider } from "react-router-dom";
import router from "./Day-15 routes/Router";
import { AuthProvider } from "./Day-15 routes/context/AuthContext";
import { Provider } from "react-redux";
import store from "./Day-15 routes/redux/store";


const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  );
};

export default App;
