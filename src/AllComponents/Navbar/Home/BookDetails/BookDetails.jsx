import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToBookList, getStoredBookList } from '../../../UntilityFunctions/MarkAsReadList';
import { addToWishList } from '../../../UntilityFunctions/MarkAsWishList';

const BookDetails = () => {



const {BookId} =useParams()
const bookData = useLoaderData()

const id = parseInt(BookId);
const book  = bookData.find(book=> book.bookId === id);
const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing,bookId} = book

const markAsRead = (id)=>{


    
    addToBookList(id)
  
}

console.log(getStoredBookList)

const markAswish = (id)=>{

   
    addToWishList(id)
}
    return (
        <div className='grid lg:grid-cols-2 items-center container mx-auto my-6 gap-5'>
  
          <div className='bg-gray-300 py-6'><img width={300} className='mx-auto' src={image} alt="" /></div>
          <div> 

            <h1>{bookName}</h1>
            <p>by:{author}</p>
            <hr />

            <p>{category}</p>
            <hr />

            <p>review{review}</p>

            <div className='flex justify-start gap-4'>
             tag: {tags.map(tagBook=> <p>#{tagBook}</p> )}
            </div>
            <hr />
            <p>Number of pages: {totalPages}</p>
            <p>Publisher: {publisher}</p>
            <p>Year of Publishing: {yearOfPublishing}</p>
            <p>Rating: {rating}</p>

            <div>
                <button onClick={()=>markAsRead(bookId)} className='btn btn-primary'>Read</button>
                <button onClick={()=>markAswish(bookId)} className='btn btn-success'>whish List</button>
            </div>

          </div>
           
        </div>
    );
};

export default BookDetails;