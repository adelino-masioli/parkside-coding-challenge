import React from "react";

// Define the props interface for the Card component
interface CardProps {
  children: React.ReactNode; // Define the children prop, which can be any React node
}

// Define the Card component as a functional component accepting props of type CardProps
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    // Render a div with specified styling classes for a card-like appearance
    <div className="p-4 bg-white rounded shadow-md">
      {children} {/* Render the children components inside the card */}
    </div>
  );
};

export default Card; // Export the Card component as default
