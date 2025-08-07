import React, { useId } from 'react';
import './ToggleSwitch.css';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, label }) => {
  const id = useId();

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <label className="togle-switch__MUP">
        <input id={id} type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider__MUP" />
      </label>
    </>
  );
};

export default ToggleSwitch;
