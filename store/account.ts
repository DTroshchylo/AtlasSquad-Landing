
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
    async create(data: any) {
      let responce = await axios.post('https://atlas-squad-test.myshopify.com/api/2024-01/graphql.json', {
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
            "917f74a8cdb1b5ba7cddf3a8587f7457"
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
      } else {

      }
      return dataReq
    },
    async signin(data: any) {
      let responce = await axios.post('https://atlas-squad-test.myshopify.com/api/2024-01/graphql.json', {
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
            "917f74a8cdb1b5ba7cddf3a8587f7457"
        }
      })
      let dataReq: any = {
        status: 200
      }
      if (responce.data.data.customerAccessTokenCreate.customerAccessToken == null) {
        dataReq = {
          status: 301,
          code: responce.data.data.customerAccessTokenCreate.customerUserErrors[0].code,
          text: responce.data.data.customerAccessTokenCreate.customerUserErrors[0].message
        }
      } else {
        this.setToken(responce.data.data.customerAccessTokenCreate.customerAccessToken.accessToken)
        dataReq = {
          status: 200,
          token: responce.data.data.customerAccessTokenCreate.customerAccessToken.accessToken
        }
      }
      return dataReq
    },
    async reset(data: any) {
      let responce = await axios.post('https://atlas-squad-test.myshopify.com/api/2024-01/graphql.json', {
        query: `mutation SendPasswordResetEmail {
          customerRecover(email: "${data.email}") {
            customerUserErrors {
              code
              message
            }
            userErrors {
              message
            }
          }
        }`,
      }, {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            "917f74a8cdb1b5ba7cddf3a8587f7457"
        }
      })
      let dataReq: any = {
        status: 200
      }
      if (responce.data.errors != null && responce.data.errors.length > 0) {
        dataReq = {
          status: 301,
          text: responce.data.errors[0].message
        }
      }
      if (responce.data.data.customerRecover > 0) {
        dataReq = {
          status: 301,
          text: responce.data.data.customerRecover[0].message
        }
      }

      return dataReq
    },
    async load(token: string) {
      try {
        //let responce = await axios.get(`http://node.atlas-squad.com/user?token=${token}`)
        //let responce = await axios.get(`http: //localhost:3054/user?token=${token}`)
        let responce = await axios.get(`http://node.atlas-squad.com/user?token=${token}`)


        if (responce.data.status == 401 || responce.data.status == 500) {

          return responce.data.status
        } else {
          const responceData = responce.data
          console.log(responceData)
          // this.account = responce.data

          let accountData = responceData

          this.account = accountData
          console.log(this.account)

        }
      } catch (error: any) {
        console.log(error)
        //console.log(error.)
      }
      return 200

      //this.account = responce.data.data.customer
    },
    async addAddress(data: any) {
      let responce = await axios.post('https://atlas-squad-test.myshopify.com/api/2024-01/graphql.json', {
        query: `mutation CreateAddress{
          customerAddressCreate(
            customerAccessToken: "${this.accountToken}",
            address: {
                address1: "${data.address}", 
                country: "${data.country}", 
                province: "${data.province}", 
                city: "${data.city}", 
                zip: "${data.zip}"
            }) { 
                customerAddress {
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
            "917f74a8cdb1b5ba7cddf3a8587f7457"
        }
      })

      let dataReq: any = {
        status: 200
      }

      if (responce.data.data.customerAddressCreate.customerUserErrors.length > 0) {
        dataReq = {
          text: responce.data.data.customerAddressCreate.customerUserErrors[0].message,
          status: 301
        }
      }

      return dataReq

    },
    async removeAddress(data: any) {
      let responce = await axios.post('https://atlas-squad-test.myshopify.com/api/2024-01/graphql.json', {
        query: `mutation DeleteAddress{
            customerAddressDelete(
                customerAccessToken: "${this.accountToken}", 
                id: "${data.id}",
            ) {
                deletedCustomerAddressId
                customerUserErrors {
                    code
                    message
                }
                userErrors {
                    message
                }
            }
        }`,
      }, {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            "917f74a8cdb1b5ba7cddf3a8587f7457"
        }
      })

      //this.account = responce.data.data.customer


    },
    async updateAddress(data: any) {
      let responce = await axios.post('https://atlas-squad-test.myshopify.com/api/2024-01/graphql.json', {
        query: `mutation UpdateAddress {
          customerAddressUpdate(
            id: "${data.id}",
            customerAccessToken: "${this.accountToken}",
            address: {
                address1: "${data.address}", 
                country: "${data.country}", 
                province: "${data.province}", 
                city: "${data.city}", 
                zip: "${data.zip}"
            }) { 
                customerAddress {
                    id
                }
                customerUserErrors {
                    code
                    message
                }
                userErrors {
                    message
                }
            }
        }`,
      }, {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            "917f74a8cdb1b5ba7cddf3a8587f7457"
        }
      })

      //this.account = responce.data.data.customer


    },
    async loadChat(token: string) {
      let responce = await axios.get(`https://node.atlas-squad.com/user/chat?token=${token}`)
      this.chat = new Array<any>()
      let chatBuffer = new Array<any>()
      responce.data.forEach((element: any) => {
        chatBuffer.push({
          id: element.id,
          message: element.attributes.message,
          role: element.attributes.role
        })
      });
      this.chat = chatBuffer
    },
    setToken(token: string) {
      this.accountToken = token
      this.accountLink = (this.accountToken == null || this.accountToken == '') ? '/account-login' : '/account'
    }
  },

})
