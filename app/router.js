'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/example', controller.home.index);
  router.post('/media/upload', controller.media.index);
  router.redirect('/*', '/example');
};
