import React from 'react';

export default function LoadingMenu() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-16 h-20 bg-white border-4 border-black rounded-lg relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 bg-black animate-fill-coffee"></div>
      </div>
      <p className="mt-5 text-lg font-bold text-black">Brewing your menu...</p>
    </div>
  );
}
