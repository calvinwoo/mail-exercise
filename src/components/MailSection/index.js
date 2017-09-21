import React from 'react';
import MailItem from '../MailItem';
import './styles.css';

const MailSection = ({ isUnread, mails, markMail }) => {
  const title = isUnread ? 'Unread' : 'Read';
  return (
    <section className="mail-section">
      <h2 className="mail-section-title">{title}</h2>
      <ul className="list-group">
        {mails.map((mail) => (
          <MailItem key={mail.id} isUnread={isUnread} mail={mail} markMail={markMail} />
        ))}
      </ul>
    </section>
  );
};

export default MailSection;
