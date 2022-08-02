import { useParams, Link } from 'react-router-dom'

let userList = [
    {
        id: 1,
        name: 'Diego',
        lasName: 'Arbelaez',
        email: 'diego@diego.com'
    },
    {
        id: 2,
        name: 'Paula',
        lasName: 'Arbelaez',
        email: 'paula@paula.com'
    },
    {
        id: 3,
        name: 'Jose',
        lasName: 'Cardona',
        email: 'jose@jose.com'
    },
    {
        id: 4,
        name: 'Luz',
        lasName: 'Hoyos',
        email: 'luz@luz.com'
    }
]

export default function Usuarios () {

    let params = useParams()

    let id = params.id

    let usuario = userList.find((oneUser) => oneUser.id == id)

    return (
        <div>
            <h1>Vista de Usuarios</h1>

            <Link to='/usuario/1'>Usuario 1</Link><br />
            <Link to='/usuario/2'>Usuario 2</Link><br />
            <Link to='/usuario/3'>Usuario 3</Link><br />
            <Link to='/usuario/4'>Usuario 4</Link>

            {/* renderizado condicional */}
            {usuario && 
                <>
                <p><b>ID Usuario</b> { params.id } { " " }</p>
                <p><b>Nombre: </b>{ usuario.name }</p>
                <p><b>Nombre: </b>{ usuario.lastName }</p>
                <p><b>Nombre: </b>{ usuario.email }</p>
                </>
            }

            {
                !usuario && <p>No hay usuarios con ese ID</p>
            }
            {/* fin renderizado condicional */}

        </div>
    )
}