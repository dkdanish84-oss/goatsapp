import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => (
  <a href="https://wa.me/919999999999" className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50">
    <FaWhatsapp size={24} />
  </a>
);
export default WhatsAppButton;
