function Button({ children }) {
  return (
    <button className="flex gap-5 items-center justify-center border border-gray-300 cursor-pointer px-4 py-2 rounded-lg min-w-3xs">
      {children}
    </button>
  );
}

export default Button;
