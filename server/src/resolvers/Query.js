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

module.exports = {
  publishedPosts,
  post,
  postsByUser
}
