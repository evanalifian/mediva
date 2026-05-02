import React from "react";

const LoadingSpinner = ({ size = "md", color = "blue" }) => {
  // Pengaturan ukuran dinamis
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-4",
    lg: "h-12 w-12 border-4",
  };

  // Pengaturan warna dinamis (menggunakan border-t untuk warna utama)
  const colorClasses = {
    blue: "border-blue-600",
    slate: "border-slate-900",
    white: "border-white",
  };

  return (
    <div className='flex justify-center items-center' role='status'>
      <div
        className={`animate-spin rounded-full border-solid ${sizeClasses[size]} ${colorClasses[color]} border-t-transparent`}></div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
