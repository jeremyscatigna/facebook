function publishedPosts(root, args, context) {
  return context.prisma.posts({ where: { published: true } })
}

function post(root, args, context) {
  return context.prisma.post({ id: args.postId })
}

function postsByUser(root, args, context) {
  return context.prisma
    .user({
      id: args.userId
    })
    .posts()
}

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

function author(root, args, context) {
  return context.prisma
    .post({
      id: root.id
    })
    .author()
}

module.exports = {
  publishedPosts,
  post,
  postsByUser,
  createDraft,
  createComment,
  createLike,
  publish,
  author
}
