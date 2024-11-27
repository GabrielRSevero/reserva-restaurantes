/* import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

const StyledDatePicker = styled(ReactDatePicker)`
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
  }
`;

const ErrorMessage = styled.span`
  color: #ff4d4f;
  font-size: 12px;
`;

interface IDatePicker {
  label?: string;
  value?: Date | null;
  onChange: (date: Date | null) => void;
  error?: string;
  placeholder?: string;
};

const DatePicker = ({
  label,
  value,
  onChange,
  error,
  placeholder,
}: IDatePicker) => {
  return (
    <DatePickerContainer>
      {label && <Label>{label}</Label>}
      <StyledDatePicker
        selected={value}
        onChange={onChange}
        placeholderText={placeholder || 'Select a date'}
        dateFormat="dd/MM/yyyy"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </DatePickerContainer>
  );
};

export default DatePicker;
 */