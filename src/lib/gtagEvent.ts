import * as $gtag from 'vue-gtag'
import type { GtagEvent } from 'vue-gtag'

const sendGtagEvent: GtagEvent = (eventName, params) => {
  $gtag.event(eventName, params)
}

export { sendGtagEvent }
