import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HelperProvider } from '../../providers/helper/helper';

@Injectable()
export class DatabaseProvider {

  private database;

  constructor(private sqlite: SQLite, private platform: Platform) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'questions-right.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.database.executeSql
            ("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY AUTOINCREMENT, code TEXT, location STRING, question TEXT, right BOOLEAN, date DATE, begin INTEGER, end INTEGER);", {})
            .then(() => {
                this.database.executeSql("DELETE FROM questions", {}).then(() => console.log('ready db'));
            })
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
    });
  }
 
  addQuestion(question: number, location : string, right : boolean, begin : number, end : number) {
    let code = localStorage['code'];
    let data = [code, question, location, right, HelperProvider.formatDate(), begin, end];
    return this.database.executeSql("INSERT INTO questions (code, question, location, right, date, begin, end) VALUES (?, ?, ?, ?, ?,?, ?)", data)
    .then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

 
  getStatistic() {
     return this.database.executeSql("SELECT * FROM questions WHERE code = ?", [localStorage['code']]).then((data) => {
      let questions = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          questions.push({ 
            question: data.rows.item(i).question, 
            right: data.rows.item(i).right, 
            location: data.rows.item(i).location, 
            timer : HelperProvider.getTimer(data.rows.item(i))});
        }
      }
      return questions;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  deleteDB() {
    return this.database.executeSql("DELETE FROM questions", {});
  }
}