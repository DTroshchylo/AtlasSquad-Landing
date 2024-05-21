
import { defineStore } from "pinia"
import axios, { AxiosError } from "axios"
const key = 'user'


export const useUser = defineStore(key, {
    state: (): any => {
        return {
            user: null,
        }
    },

    getters: {
        getUser: (state) => {
            return state.user
        },
    },

    actions: {
        async load(id: string) {
            try {
<<<<<<< HEAD
                let responce = await axios.get(`http://node.atlas-squad.com/api/public/user/${id.toUpperCase()}`)
=======
                let responce = await axios.get(`https://node.atlas-squad.com/api/public/user/${id.toUpperCase()}`)
>>>>>>> main
                if (responce.data.status == 404 || responce.data.status == 500) {
                    return responce.data.status
                } else {
                    const responceData = responce.data
                    //console.log(responceData)
                    let userData = responceData
                    this.user = userData
                }
            } catch (error: any) {
                //console.log(error)
            }
            return 200
        },
    },
})
