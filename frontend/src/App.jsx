import { useEffect, useState } from 'react'
import './App.css'
import TableList from './components/TableList'
import UserForm from './components/UserForm'
import apiFetch from './axios/config'
import DeleteConfirmation from './components/deleteConfirmation';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [deleteMode, setDeleteMode] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);

    // para limpar os inputs quando o modal for fechado no modo de edição
    if (selectedUser) {
      setSelectedUser('');
    } 
  }

  // retorna todos os usuários
  const getUsers = async () => {
    const response = await apiFetch.get('/users');
    const data = await response.data;

    setUsers(data);
  }

  // cria um usuário
  const createNewUser = async (values) => {

    console.log(values);

    await apiFetch.post('/users', values);
    getUsers();
  }

  // seleciona o usuário a ser editado
  const handleEdit = (user) => {
    openModal();
    setSelectedUser(user);
  }

  // atualiza um usuário
  const editUser = async (id, user) => {
    await apiFetch.patch(`/users/${id}`, user);
    getUsers();
  }

  // deleta um usuário
  const handleDelete = (user) => {
    setSelectedUser(user)
    setDeleteMode(true);
  }


  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className='container'>
      <h1>CRUD de usuários</h1>
      <button onClick={openModal} className='addUser-btn'>+ Criar novo usuário</button>

      <TableList users={users} handleEdit={handleEdit} handleDelete={handleDelete} />

      {isOpen &&
        <UserForm
          onClose={closeModal}
          createNewUser={createNewUser}
          selectedUser={selectedUser}
          editUser={editUser}
        />}

      {deleteMode &&
        <DeleteConfirmation
          userId={selectedUser.id}
          getUsers={getUsers}
          setDeleteMode={setDeleteMode}
          setSelectedUser={setSelectedUser}
        />}


    </div>
  )
}

export default App
