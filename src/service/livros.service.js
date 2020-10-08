import axios from 'axios';

export default {
   getAll: async () => {
      let response = await fetch('http://localhost:4000/livros',{
         crossDomain:true,
         method: 'GET',
         headers: {'Content-Type':'application/json'}})
      let body = await response.json();
      return body || null;
   },

   emprestimo: async (id) => {
      let response = await fetch(`http://localhost:4000/emprestimo/${id}`,{
         crossDomain:true,
         method: 'PUT',
         headers: {'Content-Type':'application/json'}})
      let body = await response.json();
      return body || null;
   },

   devolver: async (id) => {
      let response = await fetch(`http://localhost:4000/devolver/${id}`,{
         crossDomain:true,
         method: 'PUT',
         headers: {'Content-Type':'application/json'}})
      let body = await response.json();
      return body || null;
   },


}