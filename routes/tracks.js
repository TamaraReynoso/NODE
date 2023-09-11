const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem,deleteItem } = require("../controllers/tracks");
const checkRol = require("../middleware/rol");

/**
 * Lista los items
 */
router.get("/", authMiddleware, getItems);
/**
 * Obtener detalle de item
 */
router.get("/:id",validatorGetItem, getItem);
/**
 * Crear un registro
 */
router.post("/",
  authMiddleware,
  checkRol(["admin"]),
  validatorCreateItem,
  createItem);
/**
 * actualizar un registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
/**
 *Obtener detalle de item 
 */
router.delete("/:id",validatorGetItem, deleteItem);
module.exports = router; 
