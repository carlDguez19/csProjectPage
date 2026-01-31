import { App } from "./App"

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