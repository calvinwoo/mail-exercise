import React from 'react';
import './styles.css';

const MailContent = ({ subject, from, to, body, date }) => {
  const contacts = [from, ...to]
    .map((address) => address.substring(0, address.indexOf('@')))
    .join(', ');

  return (
    <span className="mail-content">
      <h2>{subject}</h2>
      <div className="contacts">{contacts}</div>
      <div className="body text-muted">{body}</div>
    </span>
  );
};

export default MailContent;
