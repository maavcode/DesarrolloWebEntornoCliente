import { useState } from 'react';
import Form from '../components/Form'
import Plus3 from '../components/Plus3';
import Plus5 from '../components/Plus5';
import FormName from '../components/FormName'

export default function StateAsSnapshot() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');
  if (isSent) {
    return <h1>Your message is on its way!</h1>
  } else
  return (
    <>
    <h1>3 - State As Snapshot</h1>
    <div>
        <h2>-Form</h2>
        <Form />
    </div>
    <div>
        <h2>-Plus3</h2>
        <Plus3 />
    </div>
    <div>
        <h2>-Plus5</h2>
        <Plus5 />
    </div>
    <div>
        <h2>-FormName</h2>
        <FormName />
    </div>
    </>
  );
}
function sendMessage(message) {
    
}

