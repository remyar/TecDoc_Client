import api from '../api';

export default async function (params = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await api.post({
                getAmBrands: {
                    "articleCountry": params?.articleCountry || "FR",
                    "lang": params?.lang || "FR",
                    "provider": params?.provider ? params?.provider : process.env.TECDOC_PROVIDER_ID,
                    "includeAll": params?.includeAll || false,
                    "includeAddressDetails": params?.includeAddressDetails || false,
                    "includeDataSupplierStatus": params?.includeDataSupplierStatus || false,
                    "includeDataSupplierLogo": params?.includeDataSupplierLogo || false
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    })
}