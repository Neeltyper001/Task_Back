import { multerUpload } from "../configurations/multer.config.js"

// Middleware for multipart/form data
 const multerAuthMiddleware = multerUpload.none(); // this function returns the middleware


export {multerAuthMiddleware}