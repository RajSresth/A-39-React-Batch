import { RouterProvider } from "react-router-dom";
import router from "./Day-15 routes/Router";
import authStore, { AuthProvider } from "./Day-15 routes/context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
