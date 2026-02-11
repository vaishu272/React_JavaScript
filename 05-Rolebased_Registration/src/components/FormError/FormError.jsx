const FormError = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mt-1">
      <p className="text-red-500 text-sm">{message}</p>
    </div>
  );
};

export default FormError;
