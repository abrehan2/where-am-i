// IMPORTS -
const axios = require("axios").default;
const { default: IPData } = require("ipdata");

const parseLocation = async (IP_DATA_API) => {
  const ipData = new IPData(IP_DATA_API);

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
