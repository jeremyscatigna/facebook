export const userMock = jest.fn(() => ({
  id: faker.id,
  email: faker.email,
  fistName: faker.name.firstName,
  lastName: faker.name.lastName,
  birthDate: faker.date,
  friends: userMock,
  posts: postMock
}))

export const postMock = jest.fn(() => [
  {
    id: faker.id,
    title: faker.text,
    published: faker.boolean,
    author: userMock,
    type: 'Text',
    likes: likeMock,
    comments: commentMock
  }
])

export const likeMock = jest.fn(() => [
  {
    id: faker.id,
    author: userMock,
    post: postMock,
    type: 'Like'
  }
])
