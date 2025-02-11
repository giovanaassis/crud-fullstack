/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './UserForm.css';

const UserForm = ({ onClose, createNewUser, selectedUser, editUser }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: name,
            email: email
        }

        selectedUser ? editUser(selectedUser.id, user) : createNewUser(user);
        onClose();
    }

    useEffect(() => {
        if (selectedUser) {
            setName(selectedUser.name);
            setEmail(selectedUser.email);
        }
    }, [])

    return (
        <div className='user-form'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha as informações abaixo: </h2>

                <div className='inputs'>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='inputs'>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type='button' onClick={onClose} className='close-btn'>Fechar</button>
                <button type='submit'>Salvar</button>
            </form>
        </div>
    )

}

export default UserForm;