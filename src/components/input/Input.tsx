import React from 'react';
import classnames from 'classnames';
import './input.scss';

interface InputProps {
  label: string
  id?: string
  name: string
  inputSize?: 's' | 'm'
  disabled?: boolean
  defaultValue?: string
  placeholder?: string
  warning?: string
  error?: string
  optional?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}

export const Input = ({
  label,
  id,
  name,
  inputSize = 'm',
  disabled = false,
  defaultValue,
  placeholder,
  warning,
  error,
  optional = false,
  onChange,
  ...props
}: InputProps) => {
  return (
  <div className={classnames(
    'input-wrapper',
    error && 'input-wrapper--error',
    warning && 'input-wrapper--warning',
    )}>
    <label
      htmlFor={id || name}
      className={classnames(
        'label',
        (inputSize === 's') ? 'input-label-s' : 'input-label-m'
      )}
    >{label}</label>
    {optional && <span className="input-label--optional">Optional</span>}
    {warning && <div className="input-message">{warning}</div>}
    {error && <div className="input-message">{error}</div>}
    <input
      {...props}
      id={id || name}
      name={id || name}
      type="text"
      disabled={disabled}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={(event) => onChange(event)}
      className={classnames(
        'input',
        disabled ? 'input--disabled' : '',
        inputSize ? 'input-s' : 'input-m'
      )}
    />
  </div>
  );
};
