const BubbleMemory = require('./src/Bubble/BubbleMemory/BubbleMemory');
const Action = require('./src/model/Actions/Action');
const DataBase = require('./src/model/DataBase/DataBase');
const REST = require('./src/model/ExternalAPI/RESTAPI');
const LifeCycle = require('./src/model/LifeCycle/LifeCycle');
const RegularExp = require('./src/model/RegularExpr/RegularExprWrapper');

module.exports = {
    BubbleMemory,
    Action,
    DataBase,
    REST,
    LifeCycle,
    RegularExp,
};
