const forgotPasswordTemplate =require('../config/email-templates/forgot-password.js')

module.exports = ({ env }) => ({
   host: env('HOST', '0.0.0.0'),
  // host: env('HOST', 'http://47.99.58.128'),
  port: env.int('PORT', 1339),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '210c18d7e362d837212d64561d4bdcf6'),
    },
    forgotPassword: {
      from: '327243342@qq.com',
      replyTo: '327243342@qq.com',
      emailTemplate: forgotPasswordTemplate,
    },
  },
});
