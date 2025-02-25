"use client";

import React from 'react';
import Link from 'next/link';

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick,
  external = false,
  ...rest 
}) => {
  // Button variants
  const variants = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    outline: 'btn-outline',
  };
  
  const buttonClasses = `btn ${variants[variant]} ${className}`;
  
  // If it's an external link
  if (external && href) {
    return (
      <a 
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }
  
  // If it's an internal link
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...rest}>
        {children}
      </Link>
    );
  }
  
  // If it's a button
  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;