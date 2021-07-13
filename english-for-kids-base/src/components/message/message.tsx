import React from 'react';

interface MessageType {
  text: string;
}

const Message = ({ text }: MessageType): JSX.Element => {
  return <div className="message">{text}</div>;
};

export default Message;
