import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const Publishable_key = "pk_test_51K2VUGLHdmbQBmKfNSRYQLUjL8MHGhL0n0vF12Fs7RYmT7fbYnsnikWUrqjuNr6ki7gwrCDMKSN12gRKFkXyTQOv00HqPigLRG"

const getStripe = ()=>{
    if(!stripePromise){
        stripePromise = loadStripe(Publishable_key)
    }
    return stripePromise;
}
export default getStripe;

