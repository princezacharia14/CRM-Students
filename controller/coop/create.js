const baseResponse = require('../../helper/baseResponse/baseResponse');
const Coop = require('../../model/Coop');
const { base } = require('../../model/User');

const createCoop = async(req,res) => {
    try {
        const {courseName, courseDate, courseTime} = req.body;
        const coop_exists = await Coop.exists({courseName});
        if(coop_exists) return res.status(400).json(baseResponse(400, "Course Name Already Exists", {}));
        const coop = new Coop({
            courseName:courseName,
            courseDate: courseDate,
            courseTime: courseTime
        });
        await coop.save();
        return res.status(200).json(baseResponse(200, "New Coop Added Sucessfullly", coop));
    } catch (error) {
        return res.status(500).json(baseResponse(500, "Internal Server Error", {error}));

    }
}

module.exports = createCoop;