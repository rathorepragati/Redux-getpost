import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Card = ({ post, onRemove }) => (
  <div className="col-md-4 mb-4">
    <div className="card">
      <div className="card-body position-relative ">
        <button 
          className="btn btn-link position-absolute top-0 end-0" 
          onClick={() => onRemove(post.id)}
          style={{ fontSize: '1.5rem', color: 'red', textDecoration: 'none' }}
        >
          <FaTimes />
        </button>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  </div>
);

export default Card;
