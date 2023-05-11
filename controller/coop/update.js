const baseResponse = require('../../helper/baseResponse/baseResponse');
const Coop = require('../../model/Coop');

const updateCoop = async (req, res) => {
    try {
        
        const { id } = req.params;
        const { courseName, courseDate, courseTime } = req.body;

        const coop = await Coop.findByIdAndUpdate(id,{ courseName, courseDate, courseTime },{ new: true });

        if (!coop) return res.status(404).json(baseResponse(404, "Coop not found", {}));

        return res.status(200).json(baseResponse(200, "Coop updated successfully", coop));
    } catch (error) {
        return res.status(500).json(baseResponse(500, "Internal Server Error", { error }));
    }
};
module.exports = updateCoop