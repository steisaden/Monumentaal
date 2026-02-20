import { createBrowserRouter } from "react-router";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Directory from "./pages/Directory";
import ExpertProfile from "./pages/ExpertProfile";
import Neighborhoods from "./pages/Neighborhoods";
import LeadForm from "./pages/LeadForm";
import Trust from "./pages/Trust";
import GetListed from "./pages/GetListed";
import GetListedSuccess from "./pages/GetListedSuccess";
import ProjectShowcase from "./pages/ProjectShowcase";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "categories", Component: Categories },
      { path: "directory", Component: Directory },
      { path: "experts/:id", Component: ExpertProfile },
      { path: "neighborhoods", Component: Neighborhoods },
      { path: "lead-form", Component: LeadForm },
      { path: "trust", Component: Trust },
      { path: "get-listed", Component: GetListed },
      { path: "get-listed/success", Component: GetListedSuccess },
      { path: "projects", Component: ProjectShowcase },
      { path: ":neighborhood/:service", Component: ServicePage },
      { path: "*", Component: NotFound },
    ],
  },
]);