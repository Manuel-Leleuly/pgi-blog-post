export const FieldError = ({
  errorMessages,
}: {
  errorMessages: (string | undefined)[];
}) => {
  const errorMessagesSet = new Set<string>();
  errorMessages.forEach((error) => {
    if (error) {
      errorMessagesSet.add(error);
    }
  });

  if (errorMessagesSet.size === 0) {
    return null;
  }

  return (
    <em className="text-red-500 text-xs">
      {Array.from(errorMessagesSet).map((errorMessage, index) => (
        <span key={errorMessage! + index}>
          {errorMessage}
          <br />
        </span>
      ))}
    </em>
  );
};
