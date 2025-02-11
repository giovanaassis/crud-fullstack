const pool = require('../database/db');

const getUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "user" ORDER BY id');
        res.status(200).json(result.rows);

    } catch (error) {
        console.log('Erro ao mostrar os usuários: ', error)
    }
}

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const result = await pool.query('INSERT INTO "user" (name, email) VALUES ($1, $2)', [name, email]);

        res.status(201).json(result.rows);
    } catch (error) {
        console.log('Erro ao adicinar usuário: ', error)
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email } = req.body;
        const result = await pool.query('UPDATE "user" SET name=$1, email=$2 WHERE id=$3', [name, email, id]);
        res.status(200).json(result.rows);

    } catch (error) {
        console.log('Erro ao atualizar o usuário: ', error);
    }
}

const deleteUser = async (req, res) => {

    try {
        const id = req.params.id;
        const result = await pool.query('DELETE FROM "user" WHERE id=$1', [id]);
        res.status(200).json(result.rows);

    } catch (error) {
        console.log('Erro ao deletar um usuário: ', error);
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}