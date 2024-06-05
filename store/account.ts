
import { defineStore } from "pinia"
import blogQuery from "@/query/blog.gql"
import createAccountQuery from "@/query/shopify/createAccount.gql"
import signInQuery from "@/query/shopify/signIn.gql"
import axios, { AxiosError } from "axios"
import type { ErrorResponse } from "@nuxtjs/apollo"
const key = 'account'


export const useAccount = defineStore(key, {
  state: (): any => {
    return {
      accountToken: "",
      accountLink: "",
      account: null,
      chat: new Array<any>(),
    }
  },

  getters: {
    getLink: (state) => {
      return state.accountLink
    },
    getToken: (state) => {
      return state.accountToken
    },
    getAccount: (state) => {
      return state.account
    },
    getChat: (state) => {
      return state.chat
    },
  },

  actions: {
    async create(data: any, inviteCode: string) {
      let responce = await axios.post('https://1abd10-4e.myshopify.com/api/2024-01/graphql.json', {
        query: `mutation RegisterAccount {
          customerCreate(input: {
            email: "${data.email}", 
            password: "${data.password}", 
            firstName: "${data.firstName}", 
            lastName: "${data.lastName}",
            acceptsMarketing: ${data.acceptsMarketing}, 
          }) {
            customer {
              id
            }
            customerUserErrors {
              code
              message
            }
          }
        }`,
      }, {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            "5b5b7b1ace0134d44ca9a8311ff32acd"
        }
      })
      let dataReq: any = {
        status: 200
      }
      if (responce.data.data.customerCreate == null) {
        return {
          status: 301,
          code: "LIMIT_EXCEEDED",
          text: "Creating Customer Limit exceeded. Please try again later."
        }
      }
      if (responce.data.data.customerCreate.customer == null) {
        dataReq = {
          status: 301,
          code: responce.data.data.customerCreate.customerUserErrors[0].code,
          text: responce.data.data.customerCreate.customerUserErrors[0].message
        }
      }

      if (dataReq.status == 200) {
        let responce = await axios.post('https://1abd10-4e.myshopify.com/api/2024-01/graphql.json', {
          query: `mutation SignInWithEmailAndPassword {
            customerAccessTokenCreate(input: { 
              email: "${data.email}", 
              password: "${data.password}",
            }) {
              customerAccessToken {
                accessToken
                expiresAt
              }
              customerUserErrors {
                code
                message
              }
            }
          }`,
        }, {
          headers: {
            "X-Shopify-Storefront-Access-Token":
              "5b5b7b1ace0134d44ca9a8311ff32acd"
          }
        })

        const runtimeConfig = useRuntimeConfig()
        //let responceStrapi = await axios.post(`http://localhost:3054/api/authorization/registration`, {
        let responceStrapi = await axios.post(`https://node.atlas-squad.com/api/authorization/registration`, {
          email: data.email,
          password: data.password,
          token: responce.data.data.customerAccessTokenCreate.customerAccessToken.accessToken,
          inviteCode: inviteCode
        })
      }
      return dataReq
    },
  },

})
