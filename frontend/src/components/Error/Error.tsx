//visar bara felmeddelanden (alla)

interface ErrorProps{
  errorMessages: string[];
}

const Error: React.FC<ErrorProps> = ({ errorMessages }) => {
    return (
        <div className="errorMessage-container">
          <h1>Error</h1>
            <ul>
              {errorMessages.map((errorMessage, index) =>(
                <li key={index}>{errorMessage}</li>
              ))}
            </ul>
        </div>
      );
}

export default Error