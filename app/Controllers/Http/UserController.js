'use strict'

const User = use('App/Models/User')

class UserController {

    async index() {
        return await User.all()
    }

    async store({ request, response }) {
        try {
            const { username, email, password } = request.post()
            // TODO: Validate data befere send to database

            const user = new User()
            user.username = username
            user.email = email
            user.password = password

            await user.save()

            return response.status(201).json({ message: 'User created successfully' })
        } catch (e) {
            // TODO: Throw exception
            return response.status(400).json({ message: 'Something went wrong' })
        }
    }

}

module.exports = UserController
