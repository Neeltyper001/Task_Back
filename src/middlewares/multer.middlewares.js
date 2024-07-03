// importing the configuration defined for the multer
import { multerUpload } from "../configurations/multer.config.js"

// Middleware for parsing multipart/form data
 const multerParseMiddleware = multerUpload.none(); // this function returns the middleware


export {multerParseMiddleware}