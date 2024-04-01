'use strict';

const fs = require('fs');
const Sqlite = require('better-sqlite3');

let db = new Sqlite('db.sqlite');

// Charger les données JSON dans la table 'users'
let load = function(filename) {
  const users = JSON.parse(fs.readFileSync(filename));

  // Créer la table 'users'
  db.prepare('DROP TABLE IF EXISTS users').run();
  db.prepare('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL, password TEXT)').run();

  // Insérer les données des utilisateurs
  let insertStmt = db.prepare('INSERT INTO users (email, password) VALUES (@email, @password)');
  let transaction = db.transaction((users) => {
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      insertStmt.run(user);
    }
  });

  transaction(users); 
}

// Charger les données depuis le fichier JSON
load('tutorat.json');

// Créer la table 'user'
db.prepare('DROP TABLE IF EXISTS user').run();
db.prepare('CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT)').run();

// Insérer un utilisateur dans la table 'user'
db.prepare("INSERT INTO user (name, password) VALUES ('admin', 'miam')").run();
