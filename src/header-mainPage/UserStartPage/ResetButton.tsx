import { resetStartPageToDefault } from '../../utils/forHeader/startPageUtils';

interface StartPageResetButtonProps {
  onChange: (newPage: string | null) => void;
}

export default function StartPageResetButton({ onChange }: StartPageResetButtonProps) {
  const handleReset = () => {
    const defaultPage = resetStartPageToDefault();
    onChange(defaultPage);
  };

  return (
    <button className="startpage-modal__reset-btn" onClick={handleReset}>
      Вернуть по умолчанию
    </button>
  );
}
