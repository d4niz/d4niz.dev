import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import './ContactButton.css';

function randGenerator(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export const ContactButton = () => {
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [business, setBusiness] = useState<string>('');
  const [message, setMessage] = useState('');

  const [showDialog, setShowDialog] = useState(false);

  function handleTextareaInput(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  }

  const handleSubmit = async () => {
    const randomString = randGenerator(8);
    try {

      if (mail == '' || name == '' || message == '') {
        return window.location.href = ('http://127.0.0.1:5173/')
      }
      
      const currentDate = new Date();
      const dateTime = currentDate.toLocaleString();
      const discordWebhookURL = 'https://discord.com/api/webhooks/1117211304151744563/eGVK-wvHNmKrRWMuk7CrbsO5XsVoxA521q2VvVYjzQpARw2caTOHXYDa3LOgIMOF-LyU';

      const webhookData = {
        embeds: [
          {
            title: 'New Mail at ` Date | '+dateTime+' `',
            fields: [
              {
                name: '',
                value: '',
              },
              {
                name: 'Name',
                value: '``` '+name+' ```',
                inline: true,
              },
              {
                name: 'Contact',
                value: '``` '+mail+' ```\n',
                inline: true,
              },
              {
                name: '',
                value: '',
              },
              {
                name: 'Business',
                value: '``` '+business+' ```',
                inline: true,
              },
              {
                name: 'ID',
                value: '``` '+randomString+' ```',
                inline: true,
              },
              {
                name: '',
                value: '',
              },
              {
                name: 'Message',
                value: '```'+message+'```',
              },
            ],
            color: 0xFFFF00,
          },
        ],
      };
      

      await axios.post(discordWebhookURL, webhookData);

      setName('');
      setMail('');
      setMessage('');

      setShowDialog(false);
      window.location.href = ('http://127.0.0.1:5173/')
    } catch (error) {
      console.error('Error sending message to Discord:', error);
    }
  };

  return (
    <div>
      <button className="ui-btn" onClick={() => setShowDialog(true)}>
        <span>Contact</span>
      </button>
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <img onClick={() => setShowDialog(false)} className='dialog-image' src="/logo.png" alt="logo"></img>
            <span id='dialog-line'></span>
            <div className="form-group">
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="mail"
                value={mail}
                placeholder="Mail"
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="business"
                value={business}
                placeholder="Business Name (optional)"
                onChange={(e) => setBusiness(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                onInput={handleTextareaInput}
              ></textarea>
            </div>
            <span id='dialog-line'></span>
            <button className="dialog-button" onClick={handleSubmit}>
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
