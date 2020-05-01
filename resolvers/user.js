import { v4 as uuidv4 } from 'uuid';

export default {
    Query: {
        getUsers: async (_, __, { db }, ___) => {
            try {
                const [rows, fields] = await db.query('SELECT * FROM users');
                return rows;
            } catch (error) {
                console.log(error);
            }
        },
        getUserInfo: async (_, { userId }, { db }, __) => {
            try {
                const [rows, fields] = await db.query('SELECT * FROM users WHERE userId = ?', [userId]);
                console.log({ rows })
                return rows[0];
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        createUser: async (_, { name, email, jobTitle }, { db }, __) => {
            try {
                const [rows, fields] = await db.query('INSERT INTO users (userId, name, email, jobTitle) VALUES(?, ?, ?, ?)', [uuidv4(), name, email, jobTitle]);
                console.log({ rows, fields });
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        },
        updateUserInfo: async (_, { userId, name, email, jobTitle }, { db }, __) => {
            try {
                const [rows, fields] = await db.query('UPDATE users SET name=?, email=?, jobTitle=? WHERE userId=?', [name, email, jobTitle, userId]);
                console.log({ rows, fields });
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        },
        deleteUser: async (_, { userId }, { db }, __) => {
            try {
                const [rows, fields] = await db.query('DELETE FROM users WHERE userId=?', [userId]);
                console.log({ rows, fields });
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        }
    }
}