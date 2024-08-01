import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuotes } from '../services/api';

const QuoteListPage = ({ token }) => {
  const [quotes, setQuotes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const observer = useRef();

  const lastQuoteElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setOffset(prevOffset => prevOffset + 20);
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore]);

  const fetchQuotes = async () => {
    try {
      const response = await getQuotes(token, 20, offset);
      if (response.data.data && Array.isArray(response.data.data)) {
        setQuotes(prevQuotes => [...prevQuotes, ...response.data.data]);
        if (response.data.data.length < 20) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Failed to fetch quotes', error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [offset, token]);

  return (
    <div>
      <h2>Quotes</h2>
      <div>
        {quotes.map((quote, index) => (
          <div
            key={quote.id}
            ref={quotes.length === index + 1 ? lastQuoteElementRef : null}
            className="quote-item"
          >
            <img src={quote.mediaUrl} alt="Quote" />
            <div className="overlay">{quote.text}</div>
            <p>Username: {quote.username}</p>
            <p>Created At: {new Date(quote.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
      {hasMore && <p>Loading more quotes...</p>}
      <button onClick={() => navigate('/create-quote')} className="floating-button">Create Quote</button>
    </div>
  );
};

export default QuoteListPage;
