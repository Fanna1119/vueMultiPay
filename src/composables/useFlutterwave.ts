import { useScriptTag } from '@vueuse/core'
import { unref } from 'vue'

export default function useFlutterwave(KEY) {
    if(!unref(KEY)) throw new Error("Please provide a valid Flutterwave public key");

    const PUBLIC_KEY = unref(KEY);
    const checkOut = (options: Object) => window.FlutterwaveCheckout({
        publicKey: PUBLIC_KEY,
        ...options

    })
    const { scriptTag, load, unload } = useScriptTag(
        'https://checkout.flutterwave.com/v3.js',
        () => {

        },
        { manual: false }
    )
    return {
        checkOut,
        load,
        unload,
    }

}