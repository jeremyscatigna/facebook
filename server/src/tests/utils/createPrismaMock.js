import { tagsMock, userMock, aggregateMock, ownerMock, speakerMock, postMock } from '../mocks'
import faker from 'faker'

export const prisma = {
  publishedPosts: jest.fn(() => {
    data: {
      publishedPosts: [postMock, postMock]
    }
  })
}
