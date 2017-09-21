import React from 'react';
import MailButton from '../MailButton';
import MailContent from '../MailContent';
import MailDate from '../MailDate';
import './styles.css';

const MailItem = ({ mail, markMail }) => {
  return (
    <li className="mail-item list-group-item list-group-item-action row">
      <span className="col-2">
        <MailButton onClick={() => markMail(mail.id)} />
      </span>

      <span className="content col">
        <MailContent {...mail} />
      </span>

      <span className="col-2">
        <MailDate date={mail.date} />
      </span>
    </li>
  );
};

export default MailItem;
