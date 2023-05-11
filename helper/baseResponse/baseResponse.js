/**
 * @param {number} status
 * @param {String} message
 * @param {Object} data
 */

const baseResponse = (status, message, data) => {
    logger.info({message:"Api Response Generated", status, message,data});
    return {status, message, data}
}
module.exports = baseResponse;