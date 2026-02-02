
let _provider_ = undefined;

export default {
    apiUrl: () => { return "https://webservice.tecalliance.services/pegasus-3-0/info/proxy/services/TecdocToCatDLB.jsonEndpoint" },
    setProvider: (_provider) => {
        _provider_ = _provider;
    },
    getProvider: () => { return _provider_ }
}