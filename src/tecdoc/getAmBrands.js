

export default async function ( providerId = undefined ) {
    return new Promise(async (resolve , reject) => {
        try {
            result = await api.post(process.env.REACT_APP_TECDOC_API_URL_3, {
                getBrands: {
                    "articleCountry": "FR",
                    "lang": "FR",
                    "provider": providerId ? providerId : process.env.REACT_APP_TECDOC_PROVIDER_ID_NEW,
                    "includeAll": true,
                    "includeAddressDetails": true,
                    "includeDataSupplierStatus": true,
                    "includeDataSupplierLogo": true
                }
            });
        } catch (err) {
            reject(err);
        }
        resolve();
    }) 
}