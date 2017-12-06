let config = {};

config.authInstanceId = "59f6fc85e4b0edcca35ac140";
config.objectSorageInstanceId = "59f6fc85e4b03ffa034afffc";
config.integratedMasterKey = "4ea347006f6c452ea39f7a1e";
config.clientKey = "59f6fc85e4b05ef67685f008";
config.cloudCode = "59f6fc86e4b0edcca35ac141";
config.cdnInstanceId = "59f6fcade4b03ffa034b018f";

config.baseUrl = "http://storage.backtory.com/imdbstandard";


config.lambdaHeaders =
    {
        'x-backtory-authentication-id': config.authInstanceId,
        'x-backtory-cache-mode': "No-Cache"
    };
module.exports = config;