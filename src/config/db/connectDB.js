const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ngockhuong2003',
    database: 'ToDoListData'
})



async function connectToDB() {
    try {
        await connection.connect(() => {
            console.log('Connect to DB successfully!')
        })
    } catch (error) {
        console.log('Connect to DB failure!')
    }
}


module.exports = {
    connectToDB: connectToDB,
    connection: connection,
}
