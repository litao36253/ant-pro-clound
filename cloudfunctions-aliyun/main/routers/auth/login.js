module.exports = async (ctx, next) => {
  console.log('进入音乐名称中间件')
  console.log(ctx)
  ctx.data = { musicName: '光年之外' }
  ctx.data.musicType = '华语歌曲'
  ctx.body = {
    a: ctx.data,
    event: ctx._req.event
  }
  console.log('退出音乐类型中间件')
}
