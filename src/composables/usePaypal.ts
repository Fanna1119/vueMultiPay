import { useScriptTag } from '@vueuse/core'
import { unref } from 'vue'

export default function usePaypal(params: any) {
    const PARAMS = new URLSearchParams(unref(params));
    useScriptTag(
        `https://www.paypal.com/sdk/js?${PARAMS.toString()}`,
        // on script tag loaded.
        (el: HTMLScriptElement) => {
            console.log(el)
        },
        {
            manual: false
        }
    )
}