import React, { useState, useEffect } from 'react'

const Homepage = () => {
  const [books, setBooks] = useState([]);  // Add state for books
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
      const response = await fetch('https://openlibrary.org/search.json?q=romance&limit=9');
      const data = await response.json();
      setBooks(data.docs);  // Store books in state
      setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {books.map((book) => (  
            <div key={book.key} className="col-md-4 mb-4">
              <div className="card" style={{ width: '300px' }}>
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    className="card-img-top"
                    alt={book.title}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    Author: {book.author_name?.join(", ") || "Unknown"}
                  </p>
                  <p className="card-text">
                    First Published: {book.first_publish_year || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;