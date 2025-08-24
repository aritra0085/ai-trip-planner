import React, { useState } from 'react';

interface SelectDaysProps {
  onSelectedOption: (value: string) => void;
}

function SelectDays({ onSelectedOption }: SelectDaysProps) {
  const [days, setDays] = useState(7);

  const incrementDays = () => {
    setDays(prev => prev + 1);
  };

  const decrementDays = () => {
    if (days > 1) {
      setDays(prev => prev - 1);
    }
  };

  const handleConfirm = () => {
    onSelectedOption(`${days} Days`);
  };

  return (
    <div className="bg-gray-100 p-5 rounded-xl max-w-sm">
      <div className="text-base font-medium mb-5 text-center text-gray-800">
        How many days do you want to travel?
      </div>
      
      <div className="flex items-center justify-center mb-5 gap-4">
        <button
          onClick={decrementDays}
          className="w-8 h-8 border-none bg-transparent text-xl cursor-pointer flex items-center justify-center text-gray-600 hover:text-gray-800"
        >
          −
        </button>
        
        <div className="text-lg font-semibold min-w-20 text-center text-gray-800">
          {days} Days
        </div>
        
        <button
          onClick={incrementDays}
          className="w-8 h-8 border-none bg-transparent text-xl cursor-pointer flex items-center justify-center text-gray-600 hover:text-gray-800"
        >
          +
        </button>
      </div>
      
      <div className="text-center">
        <button
          onClick={handleConfirm}
          className="bg-orange-500 hover:bg-orange-600 text-white border-none px-5 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default SelectDays;
