import api from '../api';

export default async function (params = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await api.post({
                getAssignedArticlesByIds7: {
                    "articleCountry": params?.articleCountry || "FR",
                    "articleIdPairs" : { "array" : [ ...(params?.articleIdPairs?.array || [])]},
                    "attributs": params?.attributs || false,
                    "basicData": params?.basicData || false,
                    "documents": params?.documents || false,
                    "eanNumbers": params?.eanNumbers || false,
                    "immediateAttributs": params?.immediateAttributs || false,
                    "immediateInfo": params?.immediateInfo || false,
                    "info": params?.info || false,
                    "lang": params?.lang || "FR",
                    "linkingTargetId" : params?.linkingTargetId,
                    "linkingTargetType" : params?.linkingTargetType || "",
                    "mainArticles": params?.mainArticles || false,
                    "manuId": params?.manuId,
                    "modId": params?.modId,
                    "normalAustauschPrice": params?.normalAustauschPrice || false,
                    "oeNumbers": params?.oeNumbers || false,
                    "priceDate": params?.priceDate,
                    "prices": params?.prices || false,
                    "provider": params?.provider ? params?.provider : process.env.TECDOC_PROVIDER_ID,
                    "replacedByNumbers": params?.replacedByNumbers || false,
                    "replacedNumbers": params?.replacedNumbers || false,
                    "thumbnails": params?.thumbnails || false,
                    "usageNumbers": params?.usageNumbers || false,
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    })
}
