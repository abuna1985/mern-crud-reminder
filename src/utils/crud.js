// Get one from the model collection
export const getOne = model => async (req, res, next) => {
  try {
    const doc = await model
      .findOne({ createdBy: req.user._id, _id: req.params.id })
      .lean()
      .exec()

    if (!doc) {
      return res.status(400).end()
    }

    res.status(200).json({ doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

// get all reminders with the user id within the request
export const getMany = model => async (req, res, next) => {
  try {
    const docs = await model
      .find({ createdBy: req.user._id })
      .lean()
      .exec()

    res.status(200).json({ docs })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const getAll = model => async (req, res, next) => {
  try {
    const docs = await model
      .find({})
      .lean()
      .exec()

    res.status(200).json({ docs })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

// get the user id and add to the reminder, then add to the collection
export const createOne = model => async (req, res, next) => {
  const createdBy = req.user._id
  try {
    const doc = await model.create({ ...req.body, createdBy })
    res.status(201).json({ doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

// find the reminder by user and id, then update the reminder
export const updateOne = model => async (req, res, next) => {
  try {
    const updatedDoc = await model
      .findOneAndUpdate(
        {
          createdBy: req.user._id,
          _id: req.params.id
        },
        req.body,
        { new: true }
      )
      .lean()
      .exec()

    if (!updatedDoc) {
      return res.status(400).end()
    }

    res.status(200).json({ updatedDoc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

// find reminder by user id and reminder id, then delete
export const removeOne = model => async (req, res, next) => {
  try {
    const removed = await model.findOneAndRemove({
      createdBy: req.user._id,
      _id: req.params.id
    })

    if (!removed) {
      return res.status(400).end()
    }

    return res.status(200).json({ removed })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

// Add crud functionality to one Controller object
export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
