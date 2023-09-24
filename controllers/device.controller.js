const gsmarena = require('gsmarena-api');

const viewDeviceInfo = async (req, res) => {
    const { deviceId } = req.params;
    try {
      const device = await gsmarena.catalog.getDevice(deviceId);
      res.json(device);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { viewDeviceInfo };