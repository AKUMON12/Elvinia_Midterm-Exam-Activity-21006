const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = 3000;

// Connect to MySQL
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define User model
const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }
}, {
    tableName: 'users',
    timestamps: false
});

// Route to fetch all users
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to MySQL");
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
});
