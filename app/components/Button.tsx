function Button({
  onClick,
  text,
  color,
}: {
  onClick: () => void;
  text: string;
  color?: string;
}) {
  const colorClasses =
    color === "green"
      ? "bg-green-600 hover:bg-green-700"
      : "bg-blue-600 hover:bg-blue-700";

  return (
    <button
      className={`px-4 py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${colorClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
