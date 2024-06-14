import React from "react";

const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex gap-2 md:gap-4 items-center justify-center py-5 ${className}`}
    >
      <div className="w-5 h-5 rounded-full bg-violet-400" />
      <div className="w-5 h-5 rounded-full bg-blue-400" />
      <div className="w-5 h-5 rounded-full bg-green-400" />
      <div className="w-5 h-5 rounded-full bg-yellow-400" />
      <div className="w-5 h-5 rounded-full bg-orange-400" />
      <div className="w-5 h-5 rounded-full bg-red-400" />
    </div>
  );
};

export default Divider;
