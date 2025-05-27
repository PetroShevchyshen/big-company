import type { FC, InputHTMLAttributes } from "react";

interface InputProp
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (e: string) => void;
}

export const Input: FC<InputProp> = ({
  label,
  value,
  placeholder,
  onChange,
  ...rest
}) => {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
