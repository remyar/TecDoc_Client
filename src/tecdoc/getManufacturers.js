import api from '../api';

export default async function (params = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await api.post({
                getManufacturers: {
                    "country": params?.country || "FR",
                    "countryGroupFlag" : params?.countryGroupFlag,
                    "lang": params?.lang || "FR",
                    "favouredList" : params?.favouredList,
                    "provider": params?.provider ? params?.provider : process.env.TECDOC_PROVIDER_ID,
                    "linkingTargetType": params?.linkingTargetType,
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    })
}