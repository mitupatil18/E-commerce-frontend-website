import React from 'react';
import { Footer, Navbar } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function OrderPlaced() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container text-center my-auto">
        <FontAwesomeIcon 
          icon={faCheckCircle} 
          className="text-success" 
          style={{
            fontSize: '5rem',
            animation: 'checkmark 1s ease-in-out'
          }}
        />
        <h1>Order Placed!</h1>
      </div>
      <Footer />
      <style>
        {`
          @keyframes checkmark {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}
