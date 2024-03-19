import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'sofiamishell2003',
    database: 'blog_sofia',
    password: '1234',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port:3306
})

export default pool
