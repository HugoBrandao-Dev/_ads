import SqliteDatabase from 'better-sqlite3';

const db: SqliteDatabase.Database = new SqliteDatabase('plantacao.db');

export default db;
