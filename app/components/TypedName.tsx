"use client";
import React, { useState, useEffect } from 'react';

interface Props {
  fullText: string;
}

const TypedText: React.FC<Props> = ({ fullText }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const typingSpeed = 150; // Speed in milliseconds

  useEffect(() => {
    if (index < fullText.length) {
      const interval = setInterval(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearInterval(interval); // Cleanup interval on unmount or when index changes
    } else {
      // Restart typing after completing the text
      setTimeout(() => {
        setText(''); // Clear text
        setIndex(0); // Restart typing
      }, 1000); // Add a delay before restarting
    }
  }, [index, fullText]); // Add 'index' and 'fullText' as dependencies

  return <h1>{text}</h1>;
};

export default TypedText;
