const gsmarena = require('gsmarena-api');

const searchDevice = async (req, res) => {
    const { keyword } = req.params;
    console.log("Keyword:", keyword);
    try {
      const devices = await gsmarena.search.search(keyword);
      console.log(devices);
      res.json(devices);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

const topInterests = async (req, res) => {
    try {
        const topInterestData = await gsmarena.top.get();
        res.json(topInterestData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const topDeals = async (req, res) => {
    try {
        const dealsData = await gsmarena.deals.getDeals();
        res.json(dealsData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const glossaryDetails = async (req, res) => {
    try {
        const glossaryData = await gsmarena.glossary.get();
        res.json(glossaryData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};





module.exports = { searchDevice, topInterests, topDeals, glossaryDetails };