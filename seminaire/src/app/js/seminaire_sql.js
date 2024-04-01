"use strict";

const fs = require('fs');
const Sqlite = require('better-sqlite3');
let db = new Sqlite('data2.db');



exports.load = function(filename) {
  const users = JSON.parse(fs.readFileSync(filename));
  

  // Insert the users into the users table
  let insert = db.prepare('INSERT INTO users ' +
                          '(username, email, password) ' +
                          'VALUES (@username, @email, @password)');
  for (let userId in users) {
    let user = users[userId];
    insert.run(user);
  }
  
  return true;
};
  

exports.save = function(filename) {
    let user_list = db.prepare('SELECT * FROM users ORDER BY id').all();
    let users = {};
    for (let user of user_list) {
      users[user.id] = user;
    }
    fs.writeFileSync(filename, JSON.stringify(users));
  };


exports.create = function(username, email, password) {
    let user = {
      username: username,
      email: email,
      password: password,
    };
    let result = db.prepare('INSERT INTO users ' +
                            '(username, email, password) ' +
                            'VALUES (@username, @email, @password)').run(user);
    return result.lastInsertRowid;
  };





