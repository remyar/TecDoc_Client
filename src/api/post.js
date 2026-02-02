import fetch from 'node-fetch';
import config from './config';

export default async function ( params) {
    return new Promise(async (resolve, reject) => {
 
        if ( config.getProvider() != undefined){
            Object.keys(params).forEach((x) => {
                params[x].provider = config.getProvider();
            })
        }

        async function _retry() {
            return new Promise(async (resolve, reject) => {
                try {
                    let result = await fetch(config.apiUrl(),
                        {
                            method: 'POST',
                            body: JSON.stringify(params),
                            credentials: "same-origin",
                            useSessionCookies: true
                        });

                    const r = await result.json()
                    resolve(r);
                } catch (err) {
                    reject(err);
                }
            });
        }


        try {
            resolve(await _retry());
        } catch (err) {
            try {
                resolve(await _retry());
            } catch (err) {
                reject(err);
            }
        }
    });
}