import SuccessPanel from "../../components/SuccessPanel/SuccessPanel"
import ErrorPanel from "../../components/ErrorPanel/ErrorPanel"

const ConfirmationPanel: React.FC = () => {
    
    return (
        <main>
            {isSuccess ? <SuccessPanel /> : <ErrorPanel />}
        </main>
    )
}

export default ConfirmationPanel