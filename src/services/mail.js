import fakeMailResponse from './fake-mail-response';
import isEmail from 'validator/lib/isEmail';

const baseUrl = 'https://s3.us-east-2.amazonaws.com/twine-public/apis';

const logger = console.log;

const checkMailForErrors = ({ id, subject, from, to, body, date }) => {
  let hasError = false;

  if (!Number.isInteger(id)) {
    logger('Email ID is missing.');
    hasError = true;
  }

  if (!subject) {
    logger('Email subject is missing.');
    hasError = true;
  }

  if (!isEmail(from)) {
    logger('Email from field is invalid.');
    hasError = true;
  }

  if (!to.every((toEmail) => isEmail(toEmail))) {
    logger('Email to field is invalid.');
    hasError = true;
  }

  if (!body) {
    logger('Email body is missing.');
    hasError = true;
  }

  if (!Date.parse(date)) {
    logger('Email date is invalid.');
    hasError = true;
  }

  return hasError;
};

export const getAllMail = async () => {
  /*
  const response = await fetch(`${baseUrl}/twine-mail-get.json`);
  return await response.json().emails;
  */
  const mails = fakeMailResponse.emails;
  return mails.filter((mail) => !checkMailForErrors(mail));
};

/**
 * Do not make an actual PUT request.
 * Resolve with what the response would have been.
 */
export const markMailReadState = async (id, isUnread) => {
  const allMail = await getAllMail();
  const mail = allMail.find((mail) => id === mail.id);
  mail.unread = isRead;
  return mail;
};
