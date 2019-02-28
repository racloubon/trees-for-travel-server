const Flight = require('./model')

exports.getAll = async ctx => {
  try {
    const flights = await Flight.find({});
    ctx.body = flights;
  } catch (e) {
    ctx.status = 500;
  }
}

exports.postOne = async ctx => {
  try {
  const savedFlight = await Flight.create(ctx.request.body);
  console.log(savedFlight);
  ctx.body = savedFlight;
  } catch (e) {
  ctx.status = 500
  }
};

exports.deleteOne = async ctx => {
  try {
    console.log(ctx.params.id)
    const deletedFlight = await Flight.findByIdAndRemove(ctx.params.id);
    ctx.body = deletedFlight;
  } catch (e) {
    ctx.status = 500;
  }
};
