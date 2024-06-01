import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router()

import { uploadPodcast } from "../controllers/podcast.controller.js";
import { allPodcast } from "../controllers/podcast.controller.js";
import { viewPodcast } from "../controllers/podcast.controller.js";
import { deletePodcast } from "../controllers/podcast.controller.js";
import { updatePodcast } from "../controllers/podcast.controller.js";

router.route("/upload").post(upload.fields(), uploadPodcast)
router.route("/view-all").get(allPodcast)
router.route("/view").get(viewPodcast)
router.route("/delete-podcast").post(deletePodcast)
router.route("/update-podcast").post(updatePodcast)

export default router