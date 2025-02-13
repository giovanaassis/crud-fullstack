/* eslint-disable react/prop-types */
import apiFetch from '../axios/config';
import './DeleteConfirmation.css'

const DeleteConfirmation = ({ userId, getUsers, setDeleteMode, setSelectedUser } ) => {

    const deleteUser = async (userId) => {
        await apiFetch.delete(`/users/${userId}`);
        getUsers();
        setDeleteMode(false);
        setSelectedUser('');
    }

    return (
        <div className="modal-delete">
            <p>Tem certeza que deseja remover esse usuário?</p>
            <button onClick={() => deleteUser(userId)} className='yes-btn'>Sim</button>
            <button onClick={() => { setDeleteMode(false); setSelectedUser(''); }}>Não</button>
        </div>
    )
}

export default DeleteConfirmation;