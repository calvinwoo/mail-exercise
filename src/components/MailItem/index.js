import React from 'react';
import MailButton from '../MailButton';
import MailContent from '../MailContent';
import MailDate from '../MailDate';
import './styles.css';

const MailItem = ({ mail, markMail, isUnread }) => {
  return (
    <li className="mail-item list-group-item list-group-item-action">
      <MailButton isOpen={isUnread} onClick={() => markMail(mail.id)} />
      <MailContent {...mail} />
      <MailDate date={mail.date} />
    </li>
  );
};

export default MailItem;
