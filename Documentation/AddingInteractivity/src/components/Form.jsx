    import { useState } from 'react';
    
    export default function Form() {
      const [to, setTo] = useState('Alice');
      const [message, setMessage] = useState('Hello');
    
      function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
          alert(`You said ${message} to ${to}`);
        }, 5000);
      }
    
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message);
          }}
        >
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Gestiona el cambio cuadno escribe el usuario, Rerenderiza cada letra añadida o eliminada
          />
          <button type="submit">Send</button>
        </form>
      );
    }
    