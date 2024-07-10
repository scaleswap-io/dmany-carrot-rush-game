
if (typeof gdjs.evtsExt__Choose__RandomString !== "undefined") {
  gdjs.evtsExt__Choose__RandomString.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Choose__RandomString = {};


gdjs.evtsExt__Choose__RandomString.userFunc0x96e360 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {string[]} */
const choices = eventsFunctionContext.getArgument("ChoicesString").split(',');
eventsFunctionContext.returnValue = choices[Math.floor(Math.random() * choices.length)];

};
gdjs.evtsExt__Choose__RandomString.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Choose__RandomString.userFunc0x96e360(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Choose__RandomString.func = function(runtimeScene, ChoicesString, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Choose"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Choose"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ChoicesString") return ChoicesString;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Choose__RandomString.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Choose__RandomString.registeredGdjsCallbacks = [];