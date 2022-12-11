const axios = require('axios');

exports.getModel = async (req, res) => {
    const { searchText } = req.query;
    try {
        const data = await axios.get(`https://api.sketchfab.com/v3/search?type=models&q=${searchText}`);

        let mainArr = data?.data.results;
        let arr = [];

        for (let i = 0; i < mainArr?.length; i++) {
            arr.push({ name: mainArr[i].name, viewerURL : mainArr[i].viewerUrl })
        }

        return res.status(200).json({ status: true, data: arr })
    } catch (error) {
        return res.status(500).json({ status: false, data: `server error :${error}` })
    }
}

