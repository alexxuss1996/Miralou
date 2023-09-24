import React from 'react';
type CounterType = {
  value: number;
};
const Counter = ({ value }: CounterType) => {
  return (
    <div className="absolute -top-2 -right-2 z-40 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red text-[10px] font-bold text-white">
      <span>{value}</span>
    </div>
  );
};

export default Counter;
