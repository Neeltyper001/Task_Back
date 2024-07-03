/**
 * High level function for definging standard controllers for various operations
 */

const asyncHandler = (inputAsyncFunc) => async (req,res,next)=>{
    try {
        await inputAsyncFunc(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }

}

export {asyncHandler}