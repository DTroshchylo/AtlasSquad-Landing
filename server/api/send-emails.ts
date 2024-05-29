import axios from "axios"
import { useRequestEvent } from "nuxt/app";

export default defineEventHandler(async (event) => {

    const query: any = getQuery(event)
    console.log(query)
    const formData = new FormData(this);
    formData.set('email', query.email)
    formData.set('invite', query.message)


    let urlGoogle = `https://script.google.com/macros/s/AKfycbxbGw_vVQ_8MbWiV2IiOiK-5zPpgXDVqqMTnyjQ_6LP-kmHQ4sKpTrA3_Iziu9Ui4BT/exec`
    if (query.url != null) {
        urlGoogle = query.url
    }

    await axios.post(urlGoogle, formData)
    return {
        status: 200
    }

})