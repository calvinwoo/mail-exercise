import fakeMailResponse from './fake-mail-response';

const baseUrl = 'https://s3.us-east-2.amazonaws.com/twine-public/apis';

export const getAllMail = async () => {
  /*
  const response = await fetch(`${baseUrl}/twine-mail-get.json`);
  return await response.json().emails;
  */
  return fakeMailResponse.emails;
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
