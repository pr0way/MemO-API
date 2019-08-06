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

            await User.create({ username, email, password })

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

    async update({ request, response }) {
        const { id } = request.params;
        const { username, email, password } = request.all()
        const user = await User.findBy('id', id)
        user.merge({ username, email, password })
        user.save()

        return response.status(200).json({ message: 'User updated successfully' })
    }

    async destroy({ request, response }) {
        const { id } = request.params
        const user = await User.find(id)

        await user.delete()
        return response.status(200).json({ message: 'User deleted' })
    }

}

module.exports = UserController
