import { App } from "./App"
import { Home } from "./Home/Home";
import { Project } from "./Project/Project";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";

export const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Home/>},
            {path: "project", element: <Project/>},
            {path: "about", element: <About/>},
            {path: "contact", element: <Contact/>},
        ]
    }
]