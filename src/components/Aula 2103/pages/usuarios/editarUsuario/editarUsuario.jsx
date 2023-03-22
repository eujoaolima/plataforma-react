import { Button } from "react-bootstrap";
import { usuarios } from "../.././usuarios/data/index";
import { useParams } from "react-router-dom";

export default function EditarUsuario () {

    let params = useParams();
    let id = params.id;
    // console.log(id);

    const usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); // Retorna valor booleano que satisfaz a condição
    });

    return (
        <div className="editar-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button variant="dark">Editar</Button>
        </div>
    )
}