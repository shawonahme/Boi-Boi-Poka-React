import React from 'react';
import  bannar from'../../../../assets/books.jpg'

const Bannar = () => {
    return (
        <div>
            <div className="hero bg-base-200 container mt-4 rounded-lg mx-auto min-h-screen">
  <div className="  justify-between    flex flex-col gap-4 items-center  lg:flex-row-reverse">
    <div className='basis-[50%] 
    mx-auto'><img
      src={bannar}
      className="max-w-[100%] rounded-lg shadow-2xl mx-auto" /></div>
    <div className='basis-[50%]'>
      <h1 className="text-5xl leading-relaxed font-bold">Books to freshen up your bookshelf</h1>
      <p className="py-6">
    
      </p>
      <button className=" py-2 px-4 rounded-md font-semibold bg-green-500 text-white">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bannar;