'use strict'

class GameController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
}

module.exports = GameController
