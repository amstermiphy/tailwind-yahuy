import MainLayout from "../components/layouts/MainLayout"
import HomePage from "../pages/HomePage";

const AppRoutes = [
  {
    key: "main",
    name: "main",
    path: "/",
    Component: MainLayout,
    routes: [
      {
        key: "home",
        name: "home",
        path: "/",
        index: true,
        requireAuth: false,
        Component: HomePage,
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        Component: () => <p>this content about page</p>,
      },
    ],
  },
  {
    key: "404",
    name: "404",
    path: "*",
    Component: () => <p>this content 404 page</p>,
  },
];

export default AppRoutes;
