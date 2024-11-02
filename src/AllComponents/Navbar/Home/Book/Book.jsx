import React, {  } from 'react';
import { Link } from 'react-router-dom';

const Book = ({bookData}) => {

  const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing,bookId} = bookData
    return (
<Link to={`/books/${bookId}`}>
<div  className='p-4 border-2'>
        <div className='bg-gray-300 py-4'>         <img width={100} className='mx-auto
        ' src={image} alt="" />
        </div>
         <div className='flex justify-start gap-4'>
          {tags.map((tagId)=> <p>{tagId}</p> )}
 
         </div>

         <h2>{bookName}</h2>
         <p>
            by:{author}
         </p>

         <div className='flex justify-between'>
            <p>{category}</p>
            <p>{rating} 
  <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
</p>

         </div>

        </div>
</Link>
    );
};

export default Book;