import faker from '@faker-js/faker'

const users = Array(100)
  .fill(null)
  .map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.avatar(),
  }))

export default users
