import axios from "axios"
import { useRequestEvent } from "nuxt/app";

export default defineEventHandler(async (event) => {

    const query: any = getQuery(event)
    console.log(query)
    const formData = new FormData(this);
    formData.set('name', query.name)
    formData.set('email', query.email)
    formData.set('message', query.message)

    await axios.post(`https://script.google.com/macros/s/AKfycbzS4HCq8xO27sSOwHdaUudpx8YVqwyMBm8k0sXbtqp6xazCdPTE0ZZ9JmqoxygC7AcIzQ/exec`, formData)
    return {
        status: 200
    }

})