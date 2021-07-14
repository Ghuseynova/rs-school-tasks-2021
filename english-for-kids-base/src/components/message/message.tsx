import React from 'react';

import './message.scss';

interface MessageType {
  text: string;
  className: string;
}

const Message = ({ text, className }: MessageType): JSX.Element => {
  return <div className={`message ${className}`}>{text}</div>;
};

export default Message;
