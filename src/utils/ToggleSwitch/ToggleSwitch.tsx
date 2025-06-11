import React from 'react';
import './ToggleSwitch.css';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, label }) => (
  <>
    {label && <label htmlFor="t-s__MUP-id">{label}</label>}
    <label className="togle-switch__MUP">
      <input id="t-s__MUP-id" type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider__MUP" />
    </label>
  </>
);

export default ToggleSwitch;
