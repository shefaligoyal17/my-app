export const Input = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  onClick,
  className
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`input ${className}`}
        onClick={onClick}
      />
      <style jsx>{`
        .input {
          display: block;
          width:100%;
          height:38px;
          padding-left:15px;
          border-radius:8px;
          border:1px solid #808080;
        }
      `}</style>
    </>
  );
};
