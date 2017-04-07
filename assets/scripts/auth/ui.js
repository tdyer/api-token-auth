'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
  // store user object somehow?
  store.user = data.user
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('data is', data)
}

const changePasswordFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (data) => {
  console.log('You have signed out')
  // store the user with a value of null
  store.user = null
}

const signOutFailure = (data) => {
  console.error('error')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
