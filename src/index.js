import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./BackButton.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./battlescripe.css";
import Root from "./src/routes/root";
import CadreFireblade from "./src/routes/cadreFireblade";
import KrootHounds from "./src/routes/krootHounds";
import StrikeTeam from "./src/routes/strikeTeam";
import KrootShaper from "./src/routes/krootshaper";
import CrisisSuits from "./src/routes/crisissuits";
import Ghostkeel from "./src/routes/ghostkeel";
import Pathfinders from "./src/routes/pathfinders";
import Broadside from "./src/routes/broadside";
import KrootCarnivores from "./src/routes/krootCarnivores";
import CrisisSuits2 from "./src/routes/crisissuits2";
import Tausept from "./src/routes/tausept";
import Saceasept from "./src/routes/saceasept";
import StealthSuits from "./src/routes/stealtsuits";
import Drones from "./src/routes/drones";
import Commander from "./src/routes/commander";
import Borkansept from "./src/routes/borkan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/cadre",
    element: <CadreFireblade />,
  },
  {
    path: "/commander",
    element: <Commander />,
  },
  {
    path: "/stealthsuits",
    element: <StealthSuits />,
  },
  {
    path: "/drones",
    element: <Drones />,
  },
  {
    path: "/kroothounds",
    element: <KrootHounds />,
  },
  {
    path: "/striketeam",
    element: <StrikeTeam />,
  },
  {
    path: "/krootshaper",
    element: <KrootShaper />,
  },
  {
    path: "/crisissuits",
    element: <CrisisSuits />,
  },
  {
    path: "/crisissuits2",
    element: <CrisisSuits2 />,
  },
  {
    path: "/ghostkeel",
    element: <Ghostkeel />,
  },
  {
    path: "/pathfinders",
    element: <Pathfinders />,
  },
  {
    path: "/broadside",
    element: <Broadside />,
  },
  {
    path: "/krootcarnivores",
    element: <KrootCarnivores />,
  },
  {
    path: "/tausept",
    element: <Tausept />,
  },
  {
    path: "/saceasept",
    element: <Saceasept />,
  },
  {
    path: "/borkansept",
    element: <Borkansept />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
