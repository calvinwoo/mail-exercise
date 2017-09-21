import React, { Component } from 'react';
import { getAllMail, markMailReadState } from '../../services/mail';
import MailSection from '../MailSection';
import './styles.css';

export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mails: []
    };
  }

  componentDidMount() {
    getAllMail().then((mails) => {
      const sorted = mails.sort((mailA, mailB) => Date.parse(mailA) < Date.parse(mailB) ? 1 : -1);
      this.setState({ mails: sorted })
    });
  }

  render() {
    const unreadMails = this.state.mails.filter((mail) => mail.unread);
    const readMails = this.state.mails.filter((mail) => !mail.unread);

    const modifyMail = (id, fields) => {
      const existingMail = this.state.mails.find((mail) => mail.id === id);

      const mails = this.state.mails
        .filter((mail) => mail.id !== id)
        .concat({ ...existingMail, ...fields });

      this.setState({ mails });
    };

    const markMailRead = (id) => modifyMail(id, { unread: false });
    const markMailUnread = (id) => modifyMail(id, { unread: true });

    return (
      <div className="base">
        <nav className="navbar navbar-inverse bg-primary">
          <a className="navbar-brand" href="#">Twine Mail</a>
        </nav>

        <MailSection title="Unread" mails={unreadMails} markMail={markMailRead} />
        <MailSection title="Read" mails={readMails} markMail={markMailUnread} />
      </div>
    );
  }
}
