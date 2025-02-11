/* eslint-disable react/prop-types */
import axios from "axios";
import './DeleteConfirmation.css'

const DeleteConfirmation = ({ userId, getUsers, setDeleteMode, setSelectedUser } ) => {

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:3000/api/users/${userId}`);
        getUsers();
        setDeleteMode(false);
        setSelectedUser('');
    }

    return (
        <div className="modal-delete">
            <p>Tem certeza que deseja remover esse usuário?</p>
            <button onClick={() => deleteUser(userId)}>Sim</button>
            <button onClick={() => { setDeleteMode(false); setSelectedUser(''); }}>Não</button>
        </div>
    )
}

export default DeleteConfirmation;