import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Menu from "../../../Aula 2103/menu/menu";


export default function Root() {
    return (
        <div className="root">
            <Menu />
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}