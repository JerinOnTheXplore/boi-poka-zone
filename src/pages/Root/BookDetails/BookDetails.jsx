import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';

const BookDetails = () => {
    const {id}=useParams();
    const bookId =parseInt(id);
    const data = useLoaderData();
    const singleBook=data.find(book=>book.bookId===bookId);
    console.log(singleBook);
    const {bookName,image, review, author,category}=singleBook;
    return (
        <div>
            <div className="hero bg-base-200  ">
  <div className="hero-content flex-col lg:flex-row md:flex-row md:gap-72 lg:gap-96">
    <img
      src={image}
      className="w-56 md:w-64 lg:w-72 rounded-lg shadow-2xl "
    />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className='text-lg text-slate-700 mt-2'>Book by: { author}</p>
      <div className='border-t-2 border-slate-300 border-dashed mt-5'></div>
      <p className='text-lg text-slate-700 mt-2'>{
category}</p>
      <div className='border-t-2 border-slate-300 border-dashed'></div>
      <p className="py-6 text-base text-slate-700 ">Review :
        { review}
      </p>
      <div className='border-t-2 border-slate-300 border-dashed '></div>
      <div className='flex items-center justify-center gap-5 mt-5'>
      <button className="btn btn-dash">Read</button>
      <button className="btn btn-outline btn-success">Wish List</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;