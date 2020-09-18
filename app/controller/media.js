'use strict';

const Controller = require('egg').Controller;

class MediaController extends Controller {
  async index() {
    const { ctx } = this;

    const file = ctx.request.files[0];
    console.log(file, file.filepath);

    this.ctx.body = {
      error_code: 0,
      message: 'success',
    };
  }
}

module.exports = MediaController;
