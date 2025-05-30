import { useState } from "react";
import { Input, Checkbox } from "..";

export const Form = () => {
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form className="w-full max-w-md h-80 space-y-7 bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-white p-6 rounded-lg border border-slate-300 dark:border-gray-300 ">
      <div className="space-y-2">
        <Input
          label="Name"
          onChange={setName}
          value={name}
          placeholder="Enter your name"
          type="text"
        />
        <Input
          label="Email"
          onChange={setEmail}
          value={email}
          placeholder="Enter your email"
          type="email"
        />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          handleChange={setAgreed}
          isChecked={agreed}
          label="I agree to terms"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 dark:bg-indigo-950 text-white px-4 py-2 rounded hover:bg-indigo-800 hover:dark:bg-indigo-600 transition"
      >
        Submit
      </button>
    </form>
  );
};
