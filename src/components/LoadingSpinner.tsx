function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 rounded-full border-primaryGreen border-t-transparent animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
