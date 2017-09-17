import React, { Component } from 'react';
import { getAllMail, markMailReadState } from '../../services/mail';
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
    return (
      <div className="base">
        {this.state.mails.map((mail) => (
          <li key={mail.id}>{mail.subject}</li>
        ))}
      </div>
    );
  }
}
