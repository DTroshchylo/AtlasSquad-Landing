
import { defineStore } from "pinia"
import axios, { AxiosError } from "axios"
const key = 'influencer'


export const useInfluencer = defineStore(key, {
  state: (): any => {
    return {
      influencer: null,
      recruiter: null,
      inviteInfluencer: null,

    }
  },

  getters: {
    getInfluencer: (state) => {
      return state.influencer
    },
    getInviteInfluencer: (state) => {
      return state.inviteInfluencer
    },
    getRecruiter: (state) => {
      return state.recruiter
    },

  },

  actions: {

    async loadInviteInfluencer(slug: string) {
      try {
        //let responce: any = await axios.get(`http://localhost:3054/api/public/invite-influencer?slug=${slug}`)
        let responce: any = await axios.get(`https://node.atlas-squad.com/api/public/invite-influencer?slug=${slug}`)
        if (responce.data.attributes != null) {
          this.inviteInfluencer = responce.data.attributes
        }
      } catch (error) {
        console.log(error)
      }

    },
    async loadInfluencer(slug: string) {
      //let responce: any = await axios.get(`http://localhost:3054/api/public/influencer?slug=${slug}`)
      let responce: any = await axios.get(`https://node.atlas-squad.com/api/public/influencer?slug=${slug}`)
      if (responce.data.attributes != null) {
        this.influencer = responce.data.attributes
      }
    },
    async loadRecruiter(slug: string) {
      //let responce: any = await axios.get(`http://localhost:3054/api/public/influencer?slug=${slug}`)
      let responce: any = await axios.get(`https://node.atlas-squad.com/api/public/recruiter?slug=${slug}`)

      console.log(responce.data.attributes)
      if (responce.data.attributes != null) {
        this.recruiter = responce.data.attributes
      }
    },

  },

})
