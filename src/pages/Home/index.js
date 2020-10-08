import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu'
// import books from '../../data/Books.js';
import books from '../../data/Books.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import LivroService from '../../service/livros.service' 

function Home() {
  const [livros,setLivros] = useState();

  useEffect(()=>{
    if(!livros){
      myBooks();
    }
  })

  const myBooks = async () => {
    let res = await LivroService.getAll();
    setLivros(res);
    
  }

  return (
    <div style={{backgroundColor: '#141414'}}>
      <Menu />
      
      <BannerMain
        livro = {livros?.[0]}
      />

      <Carousel
        ignoreFirstLivro
        category={livros}
      />

     

      <Footer />
      
    </div>
  );
}

export default Home;
