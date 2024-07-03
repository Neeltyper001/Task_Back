class ApiError extends Error{

    constructor(
        statusCode, message,
    ){
        super(message)
        this.status = statusCode;
        this.message= message;
        this.success= statusCode < 400;
    }
}

export {ApiError}