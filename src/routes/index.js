import { lazy } from "react";
import { DefaultRoute } from "./guard.jsx";

const Dashboard = lazy(() => import("../scenes/dashboard"));
const Invoices = lazy(() => import("../scenes/invoices"));
const Contacts = lazy(() => import("../scenes/contacts"));
const Training = lazy(() => import("../scenes/bar"));
const Form = lazy(() => import("../scenes/form"));
const Weight = lazy(() => import("../scenes/line"));
const Sleep = lazy(() => import("../scenes/pie"));
const FAQ = lazy(() => import("../scenes/faq"));
const Calendar = lazy(() => import("../scenes/calendar"));
const Profile = lazy(() => import("../scenes/profile"));

export const routes = [
  {
    key: "dashboard-route",
    title: "Dashboard",
    path: "/",
    enabled: !!sessionStorage.getItem("token"),
    component: Dashboard,
  },
  {
    key: "registration-route",
    title: "Registration",
    path: "/registration",
    enabled: !sessionStorage.getItem("token"),
    component: Form,
  },
  {
    key: "kontaktinformationen-route",
    title: "Kontaktinformationen",
    path: "/kontaktinformationen",
    enabled: !!sessionStorage.getItem("token") && !!sessionStorage.getItem("role") && sessionStorage.getItem("role").toString().toLowerCase() === "coach",
    component: Contacts,
  },
  {
    key: "fortschritte-route",
    title: "Fortschritte",
    path: "/fortschritte",
    enabled: !!sessionStorage.getItem("token") && !!sessionStorage.getItem("role") && sessionStorage.getItem("role").toString().toLowerCase() === "coach",
    component: Invoices,
  },
  {
    key: "forum-route",
    title: "Forum",
    path: "/forum",
    enabled: !!sessionStorage.getItem("token"),
    component: FAQ,
  },
  {
    key: "kalender-route",
    title: "Kalender",
    path: "/kalender",
    enabled: !!sessionStorage.getItem("token"),
    component: Calendar,
  },
  {
    key: "training-route",
    title: "Training",
    path: "/training",
    enabled: !!sessionStorage.getItem("token"),
    component: Training,
  },
  {
    key: "schlaf-route",
    title: "Schlaf",
    path: "/schlaf",
    enabled: !!sessionStorage.getItem("token"),
    component: Sleep,
  },
  {
    key: "gewicht-route",
    title: "Gewicht",
    path: "/gewicht",
    enabled: !!sessionStorage.getItem("token"),
    component: Weight,
  },
  {
    key: "Profil-route",
    title: "Profil",
    path: "/Profil",
    enabled: !!sessionStorage.getItem("token"),
    component: Profile,
  },
  {
    key: "unmapped",
    title: "Unmapped Page",
    path: "*",
    enabled: true,
    component: DefaultRoute,
  },
];
