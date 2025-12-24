import { useState, useEffect } from "react";

function ContactModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setMessage("");
      setError("");
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;
  const handleSubmit = () => {
    if (!name || !email || !message) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    setSubmitted(true); 
  };

  const handleGreenButtonClick = () => {
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative bg-white w-[454px] rounded-xl flex flex-col items-center pt-8 pb-8" onClick={(e) => e.stopPropagation()}>
        <span onClick={onClose} className="absolute top-4 right-4 cursor-pointer text-[20px]"> ✕ </span>
        <h2 className="text-[30px] mb-1">DreamHouse</h2>
        <h3 className="text-[24px] mb-6">Contact Us</h3>

        {!submitted ? (
          <>
            <input className="w-[373px] h-[46px] mb-3 border border-[#2C2C2C]/30 rounded-md px-3" type="text" placeholder="Your name.." value={name} onChange={(e) => setName(e.target.value)}/>
            <input className="w-[373px] h-[46px] mb-3 border border-[#2C2C2C]/30 rounded-md px-3" type="email" placeholder="Your email.." value={email} onChange={(e) => setEmail(e.target.value)}/>
            <textarea className="w-[373px] h-20 mb-3 border border-[#2C2C2C]/30 rounded-md px-3 py-2 resize-none" placeholder="Your message.." value={message}  onChange={(e) => setMessage(e.target.value)}/>
            <button className="w-[373px] h-[46px] bg-[#FDB354] rounded-[5px] text-[16px] mb-2" onClick={handleSubmit}>
              Send
            </button>

            {error && <p className="text-red-500 text-[14px] mb-2">{error}</p>}
          </>
        ) : (
          <button className="w-[373px] h-[46px] bg-[#A2D5AB] rounded-[5px] text-[16px]" onClick={handleGreenButtonClick} >
            Ваша заявка отправлена
          </button>
        )}
      </div>
    </div>
  );
}

export default ContactModal;