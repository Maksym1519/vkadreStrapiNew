    // strapi-api/config/database.js
    // module.exports = ({ env }) => ({
    //   connection: {
    //     client: 'postgres',
    //     connection: {
    //       host: env('DATABASE_HOST', 'localhost'),
    //       port: env.int('DATABASE_PORT', 5432),
    //       database: env('DATABASE_NAME', 'bank'),
    //       user: env('DATABASE_USERNAME', 'postgres'),
    //       password: env('DATABASE_PASSWORD', '0000'),
    //       schema: env('DATABASE_SCHEMA', 'public'), // Not required
    //       ssl: {
    //         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
    //       },
    //     },
    //     debug: false,
    //   },
    // });
    const path = require('path');

module.exports = ({ env }) => ({
   connection: {
   client: "postgres",
        connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: env.bool('DATABASE_SSL', true) 
        },
      },
  });
