import { useScriptTag } from '@vueuse/core'
import { unref } from 'vue'

export default function usePaypal(id: string) {
    const CLIENT_ID = unref(id)
    useScriptTag(
        `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`,
        // on script tag loaded.
        (el: HTMLScriptElement) => {
            // do something
        },
    )
}