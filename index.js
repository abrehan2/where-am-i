// IMPORTS -
const axios = require("axios").default;
const { default: IPData } = require("ipdata");

// PARTIALS -
const IP_DATA_API = "678903b240a7b7a596083b1cb26281fccc499393cb1e582a3698f21b";
const ipData = new IPData(IP_DATA_API);

const parseLocation = async () => {
  try {
    // FETCH USER'S IP ADDRESS
    const {
      data: { ip },
    } = await axios.get("https://api.ipify.org?format=json");

    // PARSE IP ADDRESS
    const ipInfo = await ipData.lookup(ip);

    const parser = {
      ip: ipInfo?.ip,
      longitude: ipInfo?.longitude,
      latitude: ipInfo?.latitude,
      region: ipInfo?.region,
      country: ipInfo?.country_name,
      city: ipInfo?.city,
      flag: ipInfo?.flag,
    };

    console.log(parser);

    return parser;
  } catch (error) {
    throw new Error(error?.message);
  }
};

module.exports = parseLocation;
