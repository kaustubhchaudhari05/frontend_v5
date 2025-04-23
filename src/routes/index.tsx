import { lazy } from "react";
import Register from "../pages/register";
import LoginPage from "../pages/login";

const lazyRetry: any = function (componentImport: any, name: string) {
    return new Promise((resolve, reject) => {
        const hasRefreshed = JSON.parse(
            window.localStorage.getItem(`retry-${name}-refreshed`) || "false"
        );
        componentImport()
            .then((component: any) => {
                window.localStorage.setItem(`retry-${name}-refreshed`, "false");
                resolve(component);
            })
            .catch((error: any) => {
                if (!hasRefreshed) {
                    window.localStorage.setItem(`retry-${name}-refreshed`, "true");
                    // return window.location.reload();
                }
                reject(error);
            });
    });
};

const Login = lazy(() => lazyRetry(() => import("../pages/register"), 'Register'));

const routes = [
    { path: `/login`, component: <LoginPage /> },
    // { path: `*`, component: <Layout /> },
];

const authRoutes = [{
    path: `/register`,
    component: <Register />,
    name: "register",
    // hierarchyPath: "commingsoon",
    // icon: "icon-pie-chart form-icon-list-small",
    // sidebar: false,
}]

export { routes, authRoutes };