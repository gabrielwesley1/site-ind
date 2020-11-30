module.exports = {
    production: {
        username: 'adminlocal',
        password: 'Santosfut123',
        database: 'projeto-site',
        host: 'bdsiteind.database.windows.net',
        dialect: 'mssql',
        xuse_env_variable: 'DATABASE_URL',
        dialectOptions: {
            options: {
                encrypt: true
            }
        },
        pool: {
            max: 5,
            min: 1,
            acquire: 5000,
            idle: 30000,
            connectTimeout: 5000
        }
    }
};