'use strict'

// import Amplify from '@aws-amplify/core'
// import Auth from '@aws-amplify/auth'
import Amplify, { Auth } from 'aws-amplify'

Amplify.configure({
  Auth: {
    region: 'ap-southeast-1',
    userPoolId: 'SUBSTITUTE_ME',
    userPoolWebClientId: 'SUBSTITUTE_ME',
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  }
})

export class SDKService {
    constructor() {
    this._wallet = null
    this._did  = null
  }

  static async signIn(username, password) {
    try {
      return Auth.signIn(username, password)
    } catch (error) {
      console.log('error signing in', error)
    }
  }

  // static async loginWithUsernameAndPassword(username, password, options = {}) {
  //   try {
  //     this._wallet = await Wallet.fromLoginAndPassword(username, password, options)
  //   } catch (error) {
  //     console.log(error)
  //   }

  //   return this._wallet
  // }
}