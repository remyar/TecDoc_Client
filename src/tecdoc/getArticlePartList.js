import api from '../api';

export default async function (params = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await api.post({
                getArticlePartList: {
                    "articleCountry": params?.articleCountry || "FR",
                    "articleId": params?.articleId,
                    "articleLinkId": params?.articleLinkId,
                    "lang": params?.lang || "FR",
                    "linkingTargetId": params?.linkingTargetId,
                    "linkingTargetType": params?.linkingTargetType || "",
                    "priceDate": params?.priceDate,
                    "provider": params?.provider ? params?.provider : process.env.TECDOC_PROVIDER_ID
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    })
}
