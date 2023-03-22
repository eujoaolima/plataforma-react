import { useParams } from "react-router-dom";
import { usuarios } from "../../../Aula 2103/pages/usuarios/data/index";

export default function Perfil () {
    let params = useParams();
    let id = params.id;
    // console.log(id);

    const usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); // Retorna valor booleano que satisfaz a condição
    });

    return (
        <div className="perfil">
            <img src="#" />
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <span>{usuario.description}</span>
        </div>
    )
}