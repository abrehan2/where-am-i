# geospatial-toolkit
> A Node.js package that provides instant access to the user's current location. Simplify location-based development with a lightweight and easy-to-integrate solution, ideal for applications that require real-time geospatial data.

# Installation
**npm:**
```sh
npm install geospatial-toolkit
```
## Getting started with geospatial-toolkit

Here is an example of a basic app using this package:

```jsx
const parseLocation = require('geospatial-toolkit');
const IP_DATA_API = "ADD YOUR API HERE";

const getLocation = async () => {

const { ip, longitude, latitude, region, country, city, flag } = await parseLocation(IP_DATA_API);
  
console.log(ip, longitude, latitude, region, country, city, flag);

}

getLocation();
```
> Utilize the [ip-data](https://ipdata.co/) API to leverage the capabilities of this package
