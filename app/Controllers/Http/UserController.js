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

    async show({ request }) {
        const { id } = request.params
        return await User.findBy('id', id)
    }

    async destroy({ request, response }) {
        const { id } = request.params
        const user = await User.find(id)

        await user.delete()
        return response.status(200).json({ message: 'User deleted' })
    }

}

module.exports = UserController
