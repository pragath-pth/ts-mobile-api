# Tech Source Mobile API (GSMARENA)

Welcome to the Tech Source Mobile API, a simple API based on Node JS that provides information about mobile brands, devices, and top interests. The data is sourced from GSMARENA.

## Endpoints

### List All Brands
- **Endpoint:** `http://localhost:5000/api/brands`
- **Description:** Get a list of all mobile brands.

### List All Devices for a given Brand Id
- **Endpoint:** `http://localhost:5000/api/brands/{brand-id}`
- **Example:** `http://localhost:5000/api/brands/realme-phones-118`
- **Description:** Get a list of all devices for a specific brand.

### List Device Details based on Device ID
- **Endpoint:** `http://localhost:5000/api/device/{device-id}`
- **Example:** `http://localhost:5000/api/device/realme_narzo_60x-12542`
- **Description:** Get detailed information about a specific device.

### Search Device based on keyword
- **Endpoint:** `http://localhost:5000/api/global/{keyword}`
- **Example:** `http://localhost:5000/api/global/realme 10 pro`
- **Description:** Search for devices based on a keyword.

### Get Top Interests
- **Endpoint:** `http://localhost:5000/api/global/top`
- **Description:** Get a list of top interests.

## Usage
To use the API, simply make HTTP requests to the specified endpoints using your preferred tool or programming language.

## License
This project is licensed under the MIT License.