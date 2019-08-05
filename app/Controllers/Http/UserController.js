'use strict'

class UserController {

    async index({ response }) {
        response.json({ hello: "World" })
    }

}

module.exports = UserController
