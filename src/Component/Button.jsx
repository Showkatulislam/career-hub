
const Button = ({children}) => {
  return (
    <>
      <button
        className="bg-gradient-to-r
         from-purple-400
          to-purple-800
          text-white
          p-2
          rounded
          opacity-100"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
