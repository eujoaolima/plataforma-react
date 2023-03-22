import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { usuarios } from "../../.././Aula 2103/pages/usuarios/data/index";

export default function Usuarios() {

    return (
        <>
            <hr />
            
            <h1>Usuários</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Email</th>
                    <th>Perfil do usuário</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => {
                        return (
                            <tr>
                                <th>{usuario.id}</th>
                                <th>{usuario.nome}</th>
                                <th>{usuario.idade}</th>
                                <th>{usuario.email}</th>
                                <td>
                                    <Link to={`/usuarios/perfil/${usuario.id}`}>Acessar perfil</Link>
                                </td>
                                <td>
                                    <Link to={`/usuarios/editar-usuario/${usuario.id}`}>Editar</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}