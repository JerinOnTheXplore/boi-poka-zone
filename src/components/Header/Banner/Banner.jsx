import React from 'react';

const Banner = () => {
    return (
        <div>
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="../../../../assets/books.jpg"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <button className="btn btn-active btn-success mt-4">View The List</button>
      
    </div>
  </div>
</div>   
        </div>
    );
};

export default Banner;