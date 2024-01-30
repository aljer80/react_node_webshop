import { useState, useEffect } from "react"
import PolicyData from "../../services/PolicyData/PolicyData"
import { Policy } from "../../types/disclaimer.types"

/**
 * DisclaimerPanel is a React component that displays a modal with various policies.
 *
 * @component
 * @example
 * return (
 *   <DisclaimerPanel />
 * );
 *
 * @returns {React.ReactElement} The rendered DisclaimerPanel component.
 */
const DisclaimerPanel: React.FC = () => {

    const [policies, setPolicies] = useState<Policy[]>([])

    useEffect(() => {
        setPolicies(PolicyData)
    }, [])

    /**
     * Handles the click event for the close modal button.
     */
    function handleCloseModalButtonClick(){
        console.log("Closing modal")
    }

    return (
        <article id="policies-modal">
            <button type="button" className="appButton" onClick={handleCloseModalButtonClick}>x</button>
            {policies.map((policy, index) => (
                <section key={index} id={`${policy.name}-policy`} className="policyPanel">
                    <h1>{policy.name}</h1>
                    <p>{policy.content}</p>
                </section>
            ))}
        </article>
    )
}

export default DisclaimerPanel