import axios from "axios"
import { useRequestEvent } from "nuxt/app";

export default defineEventHandler(async (event) => {

    const query: any = getQuery(event)
    console.log(query)
    const formData = new FormData(this);
    formData.set('name', query.name)
    formData.set('email', query.email)
    formData.set('message', query.message)
    formData.set('why', query.why)

    await axios.post(`https://script.google.com/macros/s/AKfycbzZCLYkGXa21vn79fh5W-cRq3TjY7kNHsgGtZ17zlOayRN5IVLA0g8TgaMW6kTXeBmFCA/exec`, formData)
    return {
        status: 200
    }

})