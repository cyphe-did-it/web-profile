"use client";
import React, { useState, useEffect } from 'react';

interface Props {
  fullText: string;
}

const TypedText: React.FC<Props> = ({fullText}) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  // const fullText = 'CYPHIL RAVEN MIDSAPAK';
  const typingSpeed = 150; // Speed in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      setIndex((prev) => prev + 1);

      if (index === fullText.length - 1) {
        setTimeout(() => {
          setText(''); // Clear text
          setIndex(0); // Restart typing
        }, 50); // Add a delay before restarting
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [index]);

  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default TypedText;
