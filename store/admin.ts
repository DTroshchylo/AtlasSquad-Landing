
import { defineStore } from "pinia"
import axios, { AxiosError } from "axios"
const key = 'admin'


export const useAdmin = defineStore(key, {
  state: (): any => {
    return {
      activeUser: null,
      users: new Array<any>(),
      activeChat: new Array<any>(),

    }
  },

  getters: {
    getUsers: (state) => {
      return state.users
    },
    getChat: (state) => {
      return state.activeChat
    },
    getActiveUser: (state) => {
      return state.activeUser
    },

  },

  actions: {

    async loadUsers() {
      // let responce = await axios.get('http://devnode1.palemiya.com/admin/users')
      let responce = await axios.get('http://devnode1.palemiya.com/admin/users')
      this.users = new Array<any>()
      let usersBuffer = new Array<any>()
      responce.data.forEach((element: any) => {
        console.log(element)
        usersBuffer.push({
          id: element.attributes.shopifyID,
          name: element.attributes.name,
        })
      });
      this.users = usersBuffer
    },
    async setActiveUser(user: any) {
      this.activeUser = user
      let responce = await axios.get(`http://devnode1.palemiya.com/admin/chat?id=${this.activeUser.id}`)
      this.activeChat = new Array<any>()
      let activeChatBuffer = new Array<any>()
      responce.data.forEach((element: any) => {
        activeChatBuffer.push({
          id: element.id,
          message: element.attributes.message,
          role: element.attributes.role
        })
      });
      this.activeChat = activeChatBuffer
      console.log(this.activeChat)
    }

  },

})
