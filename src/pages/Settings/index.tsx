import { type FC } from "react";
import { Form } from "../../components";
import { useTheme } from "../../hooks/useTheme";

export const Settings: FC = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div className="w-full h-full flex flex-col space-y-8 justify-center items-center">
      <Form />
      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded dark:bg-slate-700 dark:text-white bg-slate-200 text-black transition"
      >
        {isDark ? "🌙 Dark" : "🌞 Light"}
      </button>
    </div>
  );
};
