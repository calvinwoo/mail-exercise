import React from 'react';

const MailDate = ({ date }) => {
  const calculateDate = (date) => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const wrappedDate = new Date(date);
    const now = new Date();

    if (wrappedDate.getFullYear() !== now.getFullYear()) {
      return wrappedDate.getFullYear();
    }

    if (wrappedDate.getFullYear() === now.getFullYear() && wrappedDate.getMonth() === now.getMonth() && wrappedDate.getDate() === now.getDate()) {
      return `${wrappedDate.getHours()}:${wrappedDate.getMinutes()}`;
    }

    return `${monthNames[wrappedDate.getMonth()]} ${wrappedDate.getDate()}`;
  };

  return (
    <span className="mail-date">
      {calculateDate(date)}
    </span>
  );
};

export default MailDate;

