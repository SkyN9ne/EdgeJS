(function (template, ctx) {
  let out = ''
  if(ctx.size(ctx.resolve('users'))) {
    ctx.loop(ctx.resolve('users'), function (user, key) {
      ctx.newFrame()
      ctx.setOnFrame('user', user)
      ctx.setOnFrame('key', key)
      out += '  - Hello '
      out += `${ctx.escape(ctx.resolve('user').username)}`
      out += '\n'
      ctx.removeFrame()
    })
  } else {
    out += '  No users found'
    out += '\n'
  }
  return out
})(template, ctx)