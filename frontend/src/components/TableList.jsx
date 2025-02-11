/* eslint-disable react/prop-types */
import './TableList.css';

const TableList = ({ users, handleEdit, handleDelete }) => {

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map( user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className='actions'>
                                <button onClick={() => handleEdit(user)}>Editar</button>
                                <button onClick={() => handleDelete(user)}>Remover</button>
                            </td>
                        </tr>
                    ) ) }
                </tbody>
            </table>

        </div>
    )
}

export default TableList;