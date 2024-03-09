import React from 'react';
import { SectionWrapper } from '../Vzaemodia/SectionWrapper/SectionWrapper';

export const Notification = ({ message, type = 'info' }) => {
  // Тип може бути 'info', 'success', 'warning' або 'error', що впливатиме на стиль сповіщення.
  const getNotificationStyle = (type) => {
    switch (type) {
      case 'success':
        return 'green';
      case 'warning':
        return 'orange';
      case 'error':
        return 'red';
      default:
        return 'blue';
    }
  };

  return (
    <SectionWrapper>
      <div className={`notification ${type}`}>
        <p style={{ color: getNotificationStyle(type) }}>{message}</p>
      </div>
    </SectionWrapper>
  );
};
