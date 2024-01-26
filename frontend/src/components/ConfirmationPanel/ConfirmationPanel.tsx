import Success from "../Success/Success";
import Error from "../Error/Error";

const ConfirmationPanel: React.FC = () => {

  const isSuccess: boolean = data["isSucces"] //varifrån kommer data? hur får jag den dit?
  const response: any = data["data"]

  return (
    <div className="container" id="confirmationPanel-div">
        isSuccess ? <Success data={ response } /> : <Error data={response} />
    </div>
  )
}

export default ConfirmationPanel