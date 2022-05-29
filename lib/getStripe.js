import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const Publishable_key = process.env.NEXT_PUBLIC_STRIPE_TOKEN

const getStripe = ()=>{
    if(!stripePromise){
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TOKEN)
    }
    return stripePromise;
}
export default getStripe;

