//visar bara successmeddelanden (alla)

interface SuccessProps{
  successMessages: string[];
}

const Success: React.FC<SuccessProps> = ({ sucessMessages }) => {
    return (
        <div className="container" id="successMessage">
          <h1>Error</h1>
            <ul>
              {successMessages.map((successMessage, index) =>(
                <li key={index}>{successMessage}</li>
              ))}
            </ul>
        </div>
      );
}

export default Success