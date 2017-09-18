import React from 'react';
import MailButton from '../MailButton';
import './styles.css';

const MailItem = ({ mail, markMail }) => {
  return (
    <li className="mail-item list-group-item list-group-item-action">
      <MailButton onClick={() => markMail(mail.id)} />
      {mail.subject}
    </li>
  );
};

export default MailItem;
