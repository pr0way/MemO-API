'use strict'

class AuthController {

    login({ request, auth }) {
        const { username, email, password } = request.post()
        const token = auth.attempt(email, password)
        return token;
    }

}

module.exports = AuthController
