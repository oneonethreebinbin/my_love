import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Travel } from "./components/Travel";
import { Gallery } from "./components/Gallery";
import { Food } from "./components/Food";
import { Diary } from "./components/Diary";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "travel", Component: Travel },
      { path: "gallery", Component: Gallery },
      { path: "food", Component: Food },
      { path: "diary", Component: Diary },
    ],
  },
]);
