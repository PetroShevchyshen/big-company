import type { FC, ReactNode } from "react";

interface ButtonProp {
  children: ReactNode;
  clickHandler: () => void;
}

export const NavigationLink: FC<ButtonProp> = ({ children, clickHandler }) => {
  return (
    <div
      className="bg-slate-500 dark:bg-slate-800 w-full p-2 rounded-lg cursor-pointer text-white active:bg-slate-600 active:dark:bg-slate-700 ring-1 border-gray-300"
      onClick={clickHandler}
    >
      {children}
    </div>
  );
};
