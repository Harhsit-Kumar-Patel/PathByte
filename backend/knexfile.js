"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    development: {
        client: 'postgresql',
        connection: {
            host: process.env['DB_HOST'] || 'localhost',
            port: parseInt(process.env['DB_PORT'] || '5432'),
            database: process.env['DB_NAME'] || 'pathbyte_dev',
            user: process.env['DB_USER'] || 'postgres',
            password: process.env['DB_PASSWORD'] || 'password',
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds'
        }
    },
    staging: {
        client: 'postgresql',
        connection: {
            host: process.env['DB_HOST'] || 'localhost',
            port: parseInt(process.env['DB_PORT'] || '5432'),
            database: process.env['DB_NAME'] || 'pathbyte_dev',
            user: process.env['DB_USER'] || 'postgres',
            password: process.env['DB_PASSWORD'] || 'password',
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds'
        }
    },
    production: {
        client: 'postgresql',
        connection: {
            host: process.env['DB_HOST'] || 'localhost',
            port: parseInt(process.env['DB_PORT'] || '5432'),
            database: process.env['DB_NAME'] || 'pathbyte_dev',
            user: process.env['DB_USER'] || 'postgres',
            password: process.env['DB_PASSWORD'] || 'password',
            ssl: { rejectUnauthorized: false }
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './database/migrations'
        }
    }
};
exports.default = config;
//# sourceMappingURL=knexfile.js.map