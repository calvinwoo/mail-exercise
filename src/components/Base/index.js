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
    getAllMail().then((mails) => this.setState({ mails }));
  }

  render() {
    const unreadMails = this.state.mails.filter((mail) => mail.unread);
    const readMails = this.state.mails.filter((mail) => !mail.unread);

    return (
      <div className="base">
        <nav className="navbar navbar-inverse bg-primary">
          <a className="navbar-brand" href="#">Twine Mail</a>
        </nav>

        <MailSection title="Unread" mails={unreadMails} />
        <MailSection title="Read" mails={readMails} />
      </div>
    );
  }
}
