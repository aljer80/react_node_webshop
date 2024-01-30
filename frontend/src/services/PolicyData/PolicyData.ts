import { Policy } from "../../types/disclaimer.types"

const PolicyData: Policy[] = [
    {
        name: "cookies",
        content: "Instead of using cookies we are using local storage. Local storage is a protected area reserved by your browser and is limited in space and only accessible by the browser for this session. By closing this window you accept this use."
    },
    {
        name: "data",
        content: "We store a copy of your order and your personal details. We do not store card details."
    },
    {
        name: "gdpr",
        content: "Following GDPR we do not share any data with any 3rd party, except your card details with our payment provider. We also do not store any data apart from transaction critical data. If you ask for your data to be removed from our system we will do so when legally possible."
    },
    {
        name: "regulatory",
        content: "This site does not handle any financial information. All financial information is passed through and handled by our payment provider Stripe."
    }
]

export default PolicyData