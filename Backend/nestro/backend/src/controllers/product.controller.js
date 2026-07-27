import ProductModel from "../models/product.model.js";
import { sendBadRequest, sendConflict, sendCreated, sendNotFound, sendServerError, sendSuccess } from "../utils/response.js";

export const read = async (req, res) => {
    try {

        const product = await ProductModel.find()

        const countDocument = await ProductModel.countDocuments();

        res.status(200).json({
            success: true,
            message: "Product data found",
            data: product,
            total: countDocument
        });

    } catch (error) {
        sendServerError(res);
    }
};


export const readById = async (req, res) => {
    try {

        const { id } = req.params;

        const product = await ProductModel.findById(id)


        if (!product)
            return sendNotFound(res);

        res.status(200).json({
            success: true,
            message: "Product found",
            data: product
        });

    } catch (error) {
        sendServerError(res);
    }
};


export const create = async (req, res) => {
    try {

        const imageUrl = req.file?.path || "";

        const {
            title,
            slug,
            shortDescription,
            description,
            category,
            roomType,
            price,
            salePrice,
            discount,
            stock,
            material,
            color,
            featured,
            bestSeller,
            newArrival
        } = req.body;

        if (
            !title ||
            !slug ||
            !description ||
            !category ||
            !roomType ||
            !price
        ) {
            return sendBadRequest(res);
        }
        console.log(req.body)

        const product = await ProductModel.findOne({ slug });

        if (product) return sendConflict(res);

        await ProductModel.create({
            title,
            slug,
            shortDescription,
            description,
            category,
            roomType,
            price,
            salePrice,
            discount,
            stock,
            material,
            color,
            featured,
            bestSeller,
            newArrival,
            thumbnail: imageUrl
        });

        sendCreated(res);

    } catch (error) {
        sendServerError(res);
    }
};

import Product from "../models/product.model.js";

export const addImages = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        if (!product) return sendNotFound(res)

        // Existing Images
        const oldImages = product.images || [];

        // Newly Uploaded Images
        const newImages = req.files?.map((file) => file.path) || [];

        // Merge Old + New
        const updatedImages = [...oldImages, ...newImages];

        // Maximum 6 Images
        if (updatedImages.length > 6) {
            return res.status(400).json({
                success: false,
                message: "Maximum 6 images are allowed.",
            });
        }

        product.images = updatedImages;

        await product.save();

        return sendSuccess(res)
    } catch (error) {
        console.error(error);
        return sendServerError(res)
    }
};


export const edit = async (req, res) => {
    try {

        const { id } = req.params;

        const imageUrl = req.file?.path || "";

        const product = await ProductModel.findById(id);

        if (!product)
            return sendNotFound(res);

        Object.assign(product, req.body);

        if (imageUrl)
            product.thumbnail = imageUrl;

        await product.save();

        sendSuccess(res, "Product updated");

    } catch (error) {
        sendServerError(res);
    }
};


export const updateStatus = async (req, res) => {
    try {

        const { id } = req.params;

        const product = await ProductModel.findById(id);

        if (!product)
            return sendNotFound(res);

        product.status = !product.status;

        await product.save();

        sendSuccess(res, "Product status updated");

    } catch (error) {
        sendServerError(res);
    }
};


export const deleteById = async (req, res) => {
    try {

        const { id } = req.params;

        const product = await ProductModel.findById(id);

        if (!product)
            return sendNotFound(res);

        await ProductModel.findByIdAndDelete(id);

        sendSuccess(res, "Product deleted successfully");

    } catch (error) {
        sendServerError(res);
    }
};

export const updateFlag = async (req, res) => {
    try {

        const { id } = req.params;
        const { field } = req.body;
        console.log(id, field)
        const allowedFields = [
            "stock",
            "featured",
            "bestSeller",
            "newArrival"
        ];

        if (!allowedFields.includes(field)) {
            return sendBadRequest(res, "Invalid field");
        }

        const product = await ProductModel.findById(id);

        if (!product) {
            return sendNotFound(res);
        }

        product[field] = !product[field];

        await product.save();

        return sendSuccess(res, `${field} updated successfully`);

    } catch (error) {
        sendServerError(res);
    }
};