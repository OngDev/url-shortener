const yup = require('yup')

const schema = yup.object().shape({
  slug: yup.string().required(),
  url: yup.string().required(),
  created: yup.date().default(function () {
    return new Date()
  }),
})

module.exports = schema
