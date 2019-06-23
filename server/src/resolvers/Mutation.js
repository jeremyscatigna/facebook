function createDraft(root, args, context) {
  return context.prisma.createPost({
    title: args.title,
    type: args.type,
    author: {
      connect: { id: args.userId }
    }
  })
}

function createComment(root, args, context) {
  return context.prisma.createComment({
    content: args.content,
    author: {
      connect: { id: args.userId }
    },
    post: {
      connect: { id: args.postId }
    }
  })
}

function createLike(root, args, context) {
  return context.prisma.createLike({
    type: args.type,
    author: {
      connect: { id: args.userId }
    },
    post: {
      connect: { id: args.postId }
    }
  })
}

function publish(root, args, context) {
  return context.prisma.updatePost({
    where: { id: args.postId },
    data: { published: true }
  })
}

function createUser(root, args, context) {
  return context.prisma.createUser({ name: args.name })
}

module.exports = {
  createDraft,
  createComment,
  createLike,
  publish,
  createUser
}
