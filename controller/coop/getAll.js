const baseResponse = require('../../helper/baseResponse/baseResponse');
const Coop = require('../../model/Coop');

const getAllCoop = async (req, res) => {
    try {
        const coop = await Coop.find();
        if(!coop) return res.status(404).json(baseResponse(404, "No Coop Found", {}));
        return res.status(200).json(baseResponse(200, "All Coop Fetched", coop));
    } catch (error) {
        return res.status(500).json(baseResponse(500, "Internal Server Error", {error}));
    }
}
module.exports = getAllCoop;