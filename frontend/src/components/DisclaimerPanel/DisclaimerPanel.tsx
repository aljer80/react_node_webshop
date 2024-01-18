import { Policy } from "../../types/policy.type"

const DisclaimerPanel = () => {

  const policies: Policy[] = [
    {
      title:"Cookie Policy",
      text:"We do not use cookies on our website. Your browsing experience is cookie-free, providing a privacy-focused interaction. Instead of using cookies we are using local storage. Local storage is a protected area reserved by your browser and is limited in space and only accessible by the browser for this session."
    },
    {
      title:"GDPR",
      text:"Your privacy is our priority. We only collect the information you willingly provide during the checkout process. This data is used to create a customer account and process your order efficiently. Following GDPR we do not share any data with any 3rd party, except your card details with our payment provider."
    },
    {
      title:"Data Policy",
      text:"The only data we collect is the information you enter into the form during the checkout process. This data is used solely for creating a customer account and processing your order. We do not store any sensitive information locally, and we prioritize the security of your data. We do not store card details."
    },
    {
      title:"Compliance Policy",
      text:"We use Stripe for secure payment processing. All financial information is passed through and handled by our payment provider Stripe. During the payment request, information is securely transmitted to Stripe for payment completion. We do not use Stripe to store products or customer data. Your order details are stored in our secure database for order fulfillment purposes."
    }
  ];
  
    return (
        <section>
          {policies.map((policy, index) => ( 
          <article key={index}>
            <h3>{policy.title}</h3> {policy.text}
          </article>
          ))}
        </section>
      );
}

export default DisclaimerPanel

