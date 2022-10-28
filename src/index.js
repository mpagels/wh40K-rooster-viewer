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
import CrisisSuits from "./src/routes/crisissuits";
import Broadside from "./src/routes/broadside";
import KrootCarnivores from "./src/routes/krootCarnivores";
import Tausept from "./src/routes/tausept";
import Saceasept from "./src/routes/saceasept";
import CommanderCrisis from "./src/routes/commanderCrisis";
import Longstrike from "./src/routes/longstrike";

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
    path: "/commander-crisis",
    element: <CommanderCrisis />,
  },
  {
    path: "/longstrike",
    element: <Longstrike />,
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
    path: "/crisissuits",
    element: <CrisisSuits />,
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
