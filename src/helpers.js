import React from 'react';

export const formatNumber = n => {
  if (!n || typeof n === undefined || n === 0) {
    return 0;
  }

  return `₱ ${n
    .toString()
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

export const parseNumber = n => {
  if (!n || typeof n === undefined || n === 0) {
    return 0;
  }
  return Number(n.toString().replace(/([?₱PHP? ])\s?|(,*)/g, ''));
};
