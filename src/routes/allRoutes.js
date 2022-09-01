import React from "react";
import Academy from "../pages/Academy";
import LikeMe from "../pages/LikeMe";
import MainPage from "../pages/MainPage";
import Program from "../pages/Program";
import Studio from "../pages/Studio";

const userRoutes = [
    { label: "home", path: "/", component: MainPage },
    { label: "LikeMe", path: "/LikeMe", component: LikeMe },
    { label: "Program", path: "/Program", component: Program },
    { label: "Academy", path: "/Academy", component: Academy },
    { label: "Studio", path: "/Studio", component: Studio },
];

export { userRoutes };
