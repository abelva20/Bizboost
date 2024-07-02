import emailjs from '@emailjs/browser';
import React, {useState} from "react";

const Emailform = () => {

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();

      const servicedID = 'service_xk7w5t2';
      const templateID = 'template_tslwi3n';
      const publiciD = 'cFC4p7eOXl3v4CZjP';
      // 
      const templateParams = {

          from_email: email
      };

      // 
      emailjs.send(servicedID, templateID, templateParams, publiciD)
      .then((response) => {
          console.log('Email sent Succsesfully', response);
          setEmail('Email has been sent');
      })
      .catch((error) => {
          console.error ('error', error);
      });

  }
  return(
    <div className='container flex flex-wrap lg:w-1/2'>
      <form onSubmit={handleSubmit} className="emailForm">
          <input type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          className='pb-5'/>

          <input type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className='pb-5 rounded-lg'
          />
          
          <textarea
          placeholder='Message'
          cols="30"
          rows="10"
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
          className='pb-5'>
          </textarea>

      </form>
          <button type="submit"
          className='py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl bg-opacity-40 bg-transparent px-8
                    hover:bg-gradient-to-l hover:shadow-lg transition-all hover:duration-500 ease-in-out'>
              Send
          </button>
    </div>
  )
};

const MyModal = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-4 rounded">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Bizboost 
        </h1>
        <p className='text-center pb-7'>
          Boost Your businez
        </p>
        <Emailform />
      </div>
    </div>
  );
};

const Popup = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="h-full">
        <button 
        className="py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl bg-opacity-40 bg-transparent px-5
                    hover:bg-gradient-to-l hover:shadow-lg transition-all hover:duration-500 ease-in-out" 
        onClick={() => setShowModal(true)}>Hubungi kami</button>
      </div>
      <MyModal onClose={() => setShowModal(false)} visible={showModal} />
    </>
  );
};
export default Popup;
