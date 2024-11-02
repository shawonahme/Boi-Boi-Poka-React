import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredBookList } from '../UntilityFunctions/MarkAsReadList';
import Book from '../Navbar/Home/Book/Book';
import { getWishListBook } from '../UntilityFunctions/MarkAsWishList';

const ListBook = () => {


    const allbooks = useLoaderData();


  
    const [readBook,setReadBook] =useState([]);

    //add to mark read
    useEffect(()=>{


    const mylist = getStoredBookList();
    const myListInt = mylist.map(id=>parseInt(id))

    const disPlayBookList = allbooks.filter(book=> myListInt.includes(book.bookId))
    
    setReadBook(disPlayBookList)
    },[])

       //add to wish list

    const [wishRead,setWishRead] = useState([]);

    useEffect( ()=>{

        const myWish = getWishListBook();
        const myWishInt = myWish.map(id=> parseInt(id))
        const displayWishBookList = allbooks.filter(book => myWishInt.includes(book.bookId))
        setWishRead(displayWishBookList)

    },[])

 

    //add to sort type
    const [sort, setSort] = useState('');

    const handleSort = sortType => {
        setSort(sortType);

        // 
        if(sortType === 'No of pages'){
            const sortedReadList = [...readBook].sort((a, b) => a.totalPages - b.totalPages);
            setReadBook(sortedReadList);
        }

        if(sortType === 'Ratings'){
            const sortedReadList = [...readBook].sort((a, b) => a.rating - b.rating);
            setReadBook(sortedReadList);
        }

    }
    return (
        <div>
            <h1 className='text-3xl bg-gray-200 my-4 py-4 rounded-md container mx-auto font-semibold text-center'>Book </h1>

            <div className="dropdown  my-6">
                <div tabIndex={0} role="button" className="btn m-1">
                {
                        sort ? `Sort by: ${ sort }`  : 'Sort by'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSort('No of pages')}><a>No of pages</a></li>
                </ul>
            </div>



    
    
    <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read"  defaultChecked/>
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    {
         readBook.map((bookData)=> <Book key={bookData.bookId} bookData={bookData}></Book>)
    }
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab"
    aria-label="Wish List"
     />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  {
         wishRead.map((bookData)=> <Book key={bookData.bookId} bookData={bookData}></Book>)
    }
  </div>

 
</div>

            </div>
    );
};

export default ListBook;