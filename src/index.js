
import config from './api/config';
import getBrands from "./tecdoc/getBrands";
import getAmBrands from "./tecdoc/getAmBrands";
import getVersion from './tecdoc/getVersion';
import getManufacturers from './tecdoc/getManufacturers';
import getManufacturers2 from './tecdoc/getManufacturers2';
import getKeyValues from './tecdoc/getKeyValues';
import getDirectArticlesByIds7  from './tecdoc/getDirectArticlesByIds7';
import getDirectArticlesByIds6  from './tecdoc/getDirectArticlesByIds6';
import getAssignedArticlesByIds7 from './tecdoc/getAssignedArticlesByIds7';
import getAssignedArticlesByIds6 from './tecdoc/getAssignedArticlesByIds6';
import getArticlePartList from './tecdoc/getArticlePartList';

export default {
    setProvider : config.setProvider,
    getBrands,
    getAmBrands,
    getVersion,
    getManufacturers,
    getManufacturers2,
    getKeyValues,
    getDirectArticlesByIds7,
    getDirectArticlesByIds6,
    getAssignedArticlesByIds7,
    getAssignedArticlesByIds6,
    getArticlePartList
}