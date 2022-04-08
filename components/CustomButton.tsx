import React from "react";

export default function CustomButton({
  onClick,
  text,
  color = "bg-gradient-to-r from-blue-500 to-blue-600",
  type = "button",
  height = "h-12",
  animate = false,
}: {
  onClick: () => void;
  text: string;
  color?: string;
  type?: "button" | "submit" | "reset" | undefined;
  height?: string;
  animate?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${height} ${color} ${
        animate &&
        "transition ease-in-out delay-50 hover:scale-105 hover:bg-indigo-500 duration-200"
      } w-full rounded-xl flex items-center justify-center text-white cursor-pointer hover:opacity-90 select-none`}
    >
      <p className="font-bold p-0 m-0 ">{text}</p>
    </button>
  );
}
