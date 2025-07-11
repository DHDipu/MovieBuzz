export const Button = ({ children }) => {
  return (
    <button className="text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white py-2 px-1.5 ">
      {children}
    </button>
  );
};
