const BubbleMemory = require('./src/Bubble/BubbleMemory/BubbleMemory');
const Action = require('./src/Model/Actions/Action');
const DataBase = require('./src/Model/DataBase/DataBase');
const REST = require('./src/Model/ExternalAPI/RESTAPI');
const LifeCycle = require('./src/Model/LifeCycle/LifeCycle');
const RegularExp = require('./src/Model/RegularExpr/RegularExprWrapper');

module.exports = {
    BubbleMemory,
    Action,
    DataBase,
    REST,
    LifeCycle,
    RegularExp,
};
