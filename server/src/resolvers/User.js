function createUser(root, args, context) {
  return context.prisma.createUser({ name: args.name })
}

function posts(root, args, context) {
  return context.prisma
    .user({
      id: root.id
    })
    .posts()
}

module.exports = {
  createUser,
  posts
}
