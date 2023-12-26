import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ForwardedItem from "./pages/ForwardedItem";
import ReversedItem from "./pages/ReversedItem";
import NavBar from "./components/NavBar";

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="Forwarded-item" element={<ForwardedItem />}></Route>
        <Route path="Reversed-item" element={<ReversedItem />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
