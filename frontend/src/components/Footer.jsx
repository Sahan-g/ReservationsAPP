import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import img1 from './images/footer_logo.png'

function Footer() {
  const footerStyle = {
    backgroundColor: '#0055a3', // Background color
    color: 'white',            // Text color
    padding: '1rem',
  };

  const iconStyle = {
    width: '1.5rem',
    height: '1.5rem',
    marginRight: '0.5rem',
  };

  return (
    <footer className='my-4' style={footerStyle}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
        <img
      src={img1}
      alt="..."
        style={{ border: 'none', maxWidth: '100%', height: 'auto' }}
/>
        </div>
        <div className="text-center flex-1">
        <p className="text-lg font-bold">Embark on a Culinary Odyssey Where Reality Meets Enchantment! 
            
          </p>
        </div>
        <div className="text-center">
          <div className="text-sm font-bold">
          <div className="flex items-center my-3">
              
              Contact Us
            </div>
            <div className="flex items-center my-3">
              <FiMapPin style={iconStyle} />
              Address: 123 Main St, City, Country
            </div>
            <div className="flex items-center my-3">
              <FiPhone style={iconStyle} />
              Contact: (123) 456-7890
            </div>
            <div className="flex items-center my-3">
              <FiMail style={iconStyle} />
              Email: info@example.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
