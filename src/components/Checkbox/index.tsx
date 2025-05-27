import { type FC } from "react";

interface CheckboxProps {
  label?: string;
  isChecked: boolean;
  handleChange: (e: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  isChecked,
  handleChange,
}) => {
  return (
    <>
      <input
        type="checkbox"
        id="agree"
        checked={isChecked}
        onChange={(e) => handleChange(e.target.checked)}
        className="accent-green-500 h-4 w-4"
      />
      {label && (
        <label htmlFor="agree" className="text-sm">
          {label}
        </label>
      )}
    </>
  );
};
