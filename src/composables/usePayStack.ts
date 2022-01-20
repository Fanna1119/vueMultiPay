import { useScriptTag } from '@vueuse/core'
import { unref } from 'vue'

export default function usePayStack(params: any) {
    const PARAMS = new URLSearchParams(unref(params));
    useScriptTag(
        `https://js.paystack.co/v1/inline.js`,
        // on script tag loaded.
        (el: HTMLScriptElement) => {
            
        },
        {
            manual: false
        }
    )
}