import './ThemeToggle.css';

type ThemeToggleProps = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function ThemeToggle({ checked, onChange, disabled }: ThemeToggleProps) {
  return (
    <input
      type="checkbox"
      role="switch"
      name="theme-toggle"
      className="page-theme-toggle"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
