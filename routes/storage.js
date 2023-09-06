const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {validatorGetItem} = require("../validators/storage");
const { 
    getItems,
    getItem,
    updateItem,
    deleteItem, 
    createItem,
 } = require("../controllers/storage");

/**
 * Lista de Items
 */
router.get("/",getItems);
/**
 * Detalle de Items
 */
router.get("/:id", validatorGetItem, getItem);
/**
 * Eliminar Item
 * 
 */
router.delete("/:id", validatorGetItem, deleteItem);
/**
 * Crear item
 */
router.post("/",uploadMiddleware.single("myfile"),createItem);

module.exports = router;    