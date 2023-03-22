import { Link, Outlet } from "react-router-dom";


export default function Home() {
    return (
        <>
            <hr />
            
            <h1>Home</h1>

            <hr />

            <ul>
                <li>
                    <Link to="/section1">Section 1</Link>
                </li>

                <li>
                    <Link to="/section2">Section 2</Link>
                </li>

                <li>
                    <Link to="/section3">Section 3</Link>
                </li>
            </ul>

            <Outlet />
        </>
    )
}