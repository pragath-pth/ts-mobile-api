const gsmarena = require('gsmarena-api');

// LIST method

// const listBrands = async (req, res) => {
//     try {
//         let query = {};
//         if (req.body.platform) {
//             query.platform = req.body.platform;
//         }
//         if (req.body.choice) {
//             query.choice = req.body.choice;
//         }
//         if (req.body.exclusive) {
//             query.exclusive = req.body.exclusive === true;
//         }
//         const apps = await appModel.find(query).sort({ appId: 1 }).select('-_id -__v');
//         const appCount = apps.length;
//         res.status(200).send({ appCount: appCount, appData: apps });
//     } catch (error) {
//         console.error('Error listing applications:', error);
//         res.status(500).send('Unable to list applications');
//     }
// };

const listBrands = async (req, res) => {
    try {
        const brands = await gsmarena.catalog.getBrands();
        res.json(brands);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const listBrandModels = async (req, res) => {
    const { brandId } = req.params;
    try {
      const devices = await gsmarena.catalog.getBrand(brandId);
      res.json(devices);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = { listBrands, listBrandModels };