const { MongooseError } = require("mongoose")

exports.getErrorMessage = () => {
    if (err instanceof MongooseError) {
        return Object.values(err.errors).at(0).message;
    } else {
        return err.message;
    }
}