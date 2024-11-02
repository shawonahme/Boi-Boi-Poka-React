import React, { createContext, useEffect, useState } from 'react';
import Book from '../Book/Book';


const Books = () => {
 
    const [books,setBooks] =useState([]);
    

    useEffect(()=>{

        fetch('booksData.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])

    return (
     
<>
      
      <h1 className='text-3xl font-bold mx-auto text-center my-10 w-full'>Books</h1>
            
            
        <div className='grid lg:grid-cols-3 gap-6 container mx-auto'>

         {
            books.map((bookData)=> <Book key={bookData.bookId} bookData={bookData}></Book>)
         }

        </div>
           </>


    );
};

export default Books;