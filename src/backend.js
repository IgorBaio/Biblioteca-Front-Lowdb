import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
debugger;
const adapter = new FileSync('./data/db.json')
const db = low(adapter)
db.defauts({
  livros: [],
  emprestimos:[]
}).write()

export default db;