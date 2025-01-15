import clsx from "clsx";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  onClick
}) => {

  const buttonClass = clsx(
    "text-white border m-2 px-4 py-2 flex",
    {
      "border-blue-700 bg-blue-500": primary,
      "border-gray-700 bg-gray-500": secondary,
      "border-green-700 bg-green-500": success,
      "border-yellow-700 bg-yellow-500": warning,
      "border-red-700 bg-red-500": danger,
    },
    {
      "border-2": outline,
      "rounded-full": rounded,
    }
  )

  return <button onClick={onClick} className={buttonClass}>{children}</button>
};


export default Button;
