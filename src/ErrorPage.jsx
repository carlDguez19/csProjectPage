import { Link } from "react-router-dom"

export function ErrorPage(){
    return(
        <div>
            <h1>Oh no we seem to hava landed on a page that doesnt exist</h1>
            <Link to="/">Click here to go back home</Link>
        </div>
    )
}