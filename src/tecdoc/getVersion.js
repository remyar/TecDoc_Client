import api from '../api';

export default async function ( params = {} ) {
    return new Promise(async(resolve , reject) => {
        try {
            let result = await api.post({
                getVersion: {
                    "provider": params?.provider ? params?.provider : process.env.TECDOC_PROVIDER_ID,
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    }) 
}
