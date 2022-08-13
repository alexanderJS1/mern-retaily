export const Button = (props) => {
  const { containerStyle, children } = props;
  return (
    <button className={` bg-black text-white ${containerStyle}`}>
      {children}
    </button>
  );
};
