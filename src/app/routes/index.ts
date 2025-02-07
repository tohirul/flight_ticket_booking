import express from "express";
import v1_routes from "./v1";
import v2_routes from "./v2";

const router = express.Router();

router.use("/v1", v1_routes);
router.use("/v2", v2_routes);

export default router;
