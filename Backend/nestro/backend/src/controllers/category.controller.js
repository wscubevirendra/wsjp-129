import CategoryModel from "../models/category.model.js";
import { sendBadRequest, sendConflict, sendCreated, sendNotFound, sendServerError, sendSuccess } from "../utils/response.js";



export const read = async (req, res) => {
    try {
        const category = await CategoryModel.find();
        const countDocument = await CategoryModel.countDocuments()
        res.status(200).json({
            message: "Category data found",
            success: true,
            data: category,
            total: countDocument
        });


    } catch (error) {
        sendServerError(res)

    }

}

export const readById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findById(id);

        if (!category) return sendNotFound(res)

        res.status(200).json({
            message: "Category data found",
            success: true,
            data: category
        });


    } catch (error) {
        sendServerError(res)

    }

}

export const create = async (req, res) => {
    try {
        const imageUrl = req.file?.path || ""
        const { name, slug } = req.body;
        if (!name || !slug) return sendBadRequest(res)
        const category = await CategoryModel.findOne({ slug });
        if (category) return sendConflict(res)
        await CategoryModel.create({ name, slug, image: imageUrl })
        return sendCreated(res)

    } catch (error) {
        sendServerError(res)
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findById(id);

        if (!category) return sendNotFound(res)

        await CategoryModel.findByIdAndUpdate({ _id: id }, { $set: { status: !category.status } });
        return sendSuccess(res, "Category Status update");



    } catch (error) {
        sendServerError(res)

    }

}

export const edit = async (req, res) => {
    try {
        const imageUrl = req.file?.path || ""
        const { name, slug } = req.body;
        const { id } = req.params;
        const category = await CategoryModel.findById(id);
        if (!category) return sendNotFound(res)

        if (name) category.name = name
        if (slug) category.slug = slug
        if (imageUrl) category.image = imageUrl

        await category.save();
        sendSuccess(res,"Category Edit")
    } catch (error) {
        sendServerError(res)

    }

}

export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findById(id);
        if (!category) return sendNotFound(res)


        await CategoryModel.findByIdAndDelete(id)
        return sendSuccess(res, "Category delete successfully");


    } catch (error) {
        sendServerError(res)

    }

}