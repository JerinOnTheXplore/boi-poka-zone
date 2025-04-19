import React from 'react';
import { FaRegStar } from "react-icons/fa";
const Book = ({singleBook}) => {
    console.log(singleBook)
    const {tags}=singleBook;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='p-6 bg-slate-100 w-2/3 mx-auto pt-3'>
    <img className='h-64'
      src={singleBook.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-center'>
    {
        tags.map(tag=><button className='btn text-green-400'>#{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {singleBook.
bookName
}
      <div className="badge badge-secondary">{singleBook.yearOfPublishing}</div>
    </h2>
    <p className='text-base text-slate-700 font-medium'>Book by: {singleBook.
author
}</p>
<div className='border-t-2 border-slate-300 border-dashed'>

</div>
    
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{singleBook.
category
}</div>
      <div className="badge badge-outline">{singleBook.
rating}<FaRegStar className='text-orange-400' size={16} /></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;