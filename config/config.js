var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../server/mailer/templates')
  , notifier = {
      service: 'postmark',
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      key: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }
module.exports = {
  development: {
    db: 'mongodb://localhost/customers',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Customers Applicaton'
    }
  },
  test: {
    db: 'mongodb://localhost/customers-test',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Customers Application'
    }
  },
  production: {}
}