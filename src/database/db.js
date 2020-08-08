const Database = require('sqlite-async')
Database.open(__dirname + '/database.sqlite').then(execute)

function execute(db) {
  // Criar as tabelas do banco de dados
  db.exec(`
    CREATE TABLE IF NOT EXISTS proffys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      whatsapp TEXT,
      bio TEXT
    );

      CREATE TABLE IF NOT EXISTS classes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        subject TEXT,
        cost TEXT,
        proffy_id INTEGER
      );
  `)
}