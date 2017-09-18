import React from 'react';
import MailItem from '../MailItem';
import './styles.css';

const MailSection = ({ title, mails, markMail }) => {
  return (
    <section className="mail-section">
      <h2>{title}</h2>
      <ul className="list-group">
        {mails.map((mail) => (
          <MailItem key={mail.id} mail={mail} markMail={markMail} />
        ))}
      </ul>
    </section>
  );
};

export default MailSection;
