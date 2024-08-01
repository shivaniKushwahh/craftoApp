import React, { useState } from 'react';
import { uploadMedia, createQuote } from '../services/api';

const CreateQuotePage = ({ token }) => {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const mediaResponse = await uploadMedia(file);
      const mediaUrl = mediaResponse.data.url; // Assuming the response contains a mediaUrl
      await createQuote(token, text, mediaUrl);
      // Navigate back to quote list or show a success message
    } catch (error) {
      console.error('Failed to create quote', error);
    }
  };

  return (
    <div>
      <h2>Create Quote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Text:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateQuotePage;
