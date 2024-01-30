import SuccessPanel from "../../components/SuccessPanel/SuccessPanel"
import ErrorPanel from "../../components/ErrorPanel/ErrorPanel"

const ConfirmationPanel: React.FC = () => {
    const isSuccess: boolean = data['isSuccess']
    const response: any = data['data']

    return (
        isSuccess ? <SuccessPanel data={ response } /> : <ErrorPanel data={ response } />
    )
}

export default ConfirmationPanel