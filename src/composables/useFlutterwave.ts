import { useScriptTag } from '@vueuse/core'
import { unref } from 'vue'

export default function useFlutterwave(KEY) {
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
        scriptTag
    }

}