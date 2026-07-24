import RoomModel from "../models/room.model.js";
import {
  sendBadRequest,
  sendConflict,
  sendCreated,
  sendNotFound,
  sendServerError,
  sendSuccess,
} from "../utils/response.js";

export const read = async (req, res) => {
  try {
    const rooms = await RoomModel.find();
    const countDocument = await RoomModel.countDocuments();

    res.status(200).json({
      message: "Room data found",
      success: true,
      data: rooms,
      total: countDocument,
    });
  } catch (error) {
    sendServerError(res);
  }
};

export const readById = async (req, res) => {
  try {
    const { id } = req.params;

    const room = await RoomModel.findById(id);

    if (!room) return sendNotFound(res);

    res.status(200).json({
      message: "Room data found",
      success: true,
      data: room,
    });
  } catch (error) {
    sendServerError(res);
  }
};

export const create = async (req, res) => {
  try {
    const imageUrl = req.file?.path || "";
    const { name, slug } = req.body;

    if (!name || !slug) return sendBadRequest(res);

    const room = await RoomModel.findOne({ slug });

    if (room) return sendConflict(res);

    await RoomModel.create({
      name,
      slug,
      image: imageUrl,
    });

    return sendCreated(res);
  } catch (error) {
    sendServerError(res);
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const room = await RoomModel.findById(id);

    if (!room) return sendNotFound(res);

    await RoomModel.findByIdAndUpdate(id, {
      $set: {
        status: !room.status,
      },
    });

    return sendSuccess(res, "Room status updated");
  } catch (error) {
    sendServerError(res);
  }
};

export const edit = async (req, res) => {
  try {
    const imageUrl = req.file?.path || "";
    const { name, slug } = req.body;
    const { id } = req.params;

    const room = await RoomModel.findById(id);

    if (!room) return sendNotFound(res);

    if (name) room.name = name;
    if (slug) room.slug = slug;
    if (imageUrl) room.image = imageUrl;

    await room.save();

    return sendSuccess(res, "Room updated successfully");
  } catch (error) {
    sendServerError(res);
  }
};

export const deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    const room = await RoomModel.findById(id);

    if (!room) return sendNotFound(res);

    await RoomModel.findByIdAndDelete(id);

    return sendSuccess(res, "Room deleted successfully");
  } catch (error) {
    sendServerError(res);
  }
};