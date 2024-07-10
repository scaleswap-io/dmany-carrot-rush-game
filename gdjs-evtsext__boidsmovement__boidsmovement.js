
gdjs.evtsExt__BoidsMovement__BoidsMovement = gdjs.evtsExt__BoidsMovement__BoidsMovement || {};

/**
 * Behavior generated from Boids Movement
 */
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement = class BoidsMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.MaxSpeed = behaviorData.MaxSpeed !== undefined ? behaviorData.MaxSpeed : Number("360") || 0;
    this._behaviorData.MaxAcceleration = behaviorData.MaxAcceleration !== undefined ? behaviorData.MaxAcceleration : Number("720") || 0;
    this._behaviorData.ShouldRotate = behaviorData.ShouldRotate !== undefined ? behaviorData.ShouldRotate : true;
    this._behaviorData.CohesionRadius = behaviorData.CohesionRadius !== undefined ? behaviorData.CohesionRadius : Number("64") || 0;
    this._behaviorData.AlignmentRadius = behaviorData.AlignmentRadius !== undefined ? behaviorData.AlignmentRadius : Number("48") || 0;
    this._behaviorData.SeparationRadius = behaviorData.SeparationRadius !== undefined ? behaviorData.SeparationRadius : Number("32") || 0;
    this._behaviorData.CohesionWeight = behaviorData.CohesionWeight !== undefined ? behaviorData.CohesionWeight : Number("1") || 0;
    this._behaviorData.AlignmentWeight = behaviorData.AlignmentWeight !== undefined ? behaviorData.AlignmentWeight : Number("1") || 0;
    this._behaviorData.SeparationWeight = behaviorData.SeparationWeight !== undefined ? behaviorData.SeparationWeight : Number("2") || 0;
    this._behaviorData.TrajectoryDistance = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.MaxSpeed !== newBehaviorData.MaxSpeed)
      this._behaviorData.MaxSpeed = newBehaviorData.MaxSpeed;
    if (oldBehaviorData.MaxAcceleration !== newBehaviorData.MaxAcceleration)
      this._behaviorData.MaxAcceleration = newBehaviorData.MaxAcceleration;
    if (oldBehaviorData.ShouldRotate !== newBehaviorData.ShouldRotate)
      this._behaviorData.ShouldRotate = newBehaviorData.ShouldRotate;
    if (oldBehaviorData.CohesionRadius !== newBehaviorData.CohesionRadius)
      this._behaviorData.CohesionRadius = newBehaviorData.CohesionRadius;
    if (oldBehaviorData.AlignmentRadius !== newBehaviorData.AlignmentRadius)
      this._behaviorData.AlignmentRadius = newBehaviorData.AlignmentRadius;
    if (oldBehaviorData.SeparationRadius !== newBehaviorData.SeparationRadius)
      this._behaviorData.SeparationRadius = newBehaviorData.SeparationRadius;
    if (oldBehaviorData.CohesionWeight !== newBehaviorData.CohesionWeight)
      this._behaviorData.CohesionWeight = newBehaviorData.CohesionWeight;
    if (oldBehaviorData.AlignmentWeight !== newBehaviorData.AlignmentWeight)
      this._behaviorData.AlignmentWeight = newBehaviorData.AlignmentWeight;
    if (oldBehaviorData.SeparationWeight !== newBehaviorData.SeparationWeight)
      this._behaviorData.SeparationWeight = newBehaviorData.SeparationWeight;
    if (oldBehaviorData.TrajectoryDistance !== newBehaviorData.TrajectoryDistance)
      this._behaviorData.TrajectoryDistance = newBehaviorData.TrajectoryDistance;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    MaxSpeed: this._behaviorData.MaxSpeed,
    MaxAcceleration: this._behaviorData.MaxAcceleration,
    ShouldRotate: this._behaviorData.ShouldRotate,
    CohesionRadius: this._behaviorData.CohesionRadius,
    AlignmentRadius: this._behaviorData.AlignmentRadius,
    SeparationRadius: this._behaviorData.SeparationRadius,
    CohesionWeight: this._behaviorData.CohesionWeight,
    AlignmentWeight: this._behaviorData.AlignmentWeight,
    SeparationWeight: this._behaviorData.SeparationWeight,
    TrajectoryDistance: this._behaviorData.TrajectoryDistance,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.MaxSpeed !== undefined)
      this._behaviorData.MaxSpeed = networkSyncData.props.MaxSpeed;
    if (networkSyncData.props.MaxAcceleration !== undefined)
      this._behaviorData.MaxAcceleration = networkSyncData.props.MaxAcceleration;
    if (networkSyncData.props.ShouldRotate !== undefined)
      this._behaviorData.ShouldRotate = networkSyncData.props.ShouldRotate;
    if (networkSyncData.props.CohesionRadius !== undefined)
      this._behaviorData.CohesionRadius = networkSyncData.props.CohesionRadius;
    if (networkSyncData.props.AlignmentRadius !== undefined)
      this._behaviorData.AlignmentRadius = networkSyncData.props.AlignmentRadius;
    if (networkSyncData.props.SeparationRadius !== undefined)
      this._behaviorData.SeparationRadius = networkSyncData.props.SeparationRadius;
    if (networkSyncData.props.CohesionWeight !== undefined)
      this._behaviorData.CohesionWeight = networkSyncData.props.CohesionWeight;
    if (networkSyncData.props.AlignmentWeight !== undefined)
      this._behaviorData.AlignmentWeight = networkSyncData.props.AlignmentWeight;
    if (networkSyncData.props.SeparationWeight !== undefined)
      this._behaviorData.SeparationWeight = networkSyncData.props.SeparationWeight;
    if (networkSyncData.props.TrajectoryDistance !== undefined)
      this._behaviorData.TrajectoryDistance = networkSyncData.props.TrajectoryDistance;
  }

  // Properties:
  
  _getMaxSpeed() {
    return this._behaviorData.MaxSpeed !== undefined ? this._behaviorData.MaxSpeed : Number("360") || 0;
  }
  _setMaxSpeed(newValue) {
    this._behaviorData.MaxSpeed = newValue;
  }
  _getMaxAcceleration() {
    return this._behaviorData.MaxAcceleration !== undefined ? this._behaviorData.MaxAcceleration : Number("720") || 0;
  }
  _setMaxAcceleration(newValue) {
    this._behaviorData.MaxAcceleration = newValue;
  }
  _getShouldRotate() {
    return this._behaviorData.ShouldRotate !== undefined ? this._behaviorData.ShouldRotate : true;
  }
  _setShouldRotate(newValue) {
    this._behaviorData.ShouldRotate = newValue;
  }
  _toggleShouldRotate() {
    this._setShouldRotate(!this._getShouldRotate());
  }
  _getCohesionRadius() {
    return this._behaviorData.CohesionRadius !== undefined ? this._behaviorData.CohesionRadius : Number("64") || 0;
  }
  _setCohesionRadius(newValue) {
    this._behaviorData.CohesionRadius = newValue;
  }
  _getAlignmentRadius() {
    return this._behaviorData.AlignmentRadius !== undefined ? this._behaviorData.AlignmentRadius : Number("48") || 0;
  }
  _setAlignmentRadius(newValue) {
    this._behaviorData.AlignmentRadius = newValue;
  }
  _getSeparationRadius() {
    return this._behaviorData.SeparationRadius !== undefined ? this._behaviorData.SeparationRadius : Number("32") || 0;
  }
  _setSeparationRadius(newValue) {
    this._behaviorData.SeparationRadius = newValue;
  }
  _getCohesionWeight() {
    return this._behaviorData.CohesionWeight !== undefined ? this._behaviorData.CohesionWeight : Number("1") || 0;
  }
  _setCohesionWeight(newValue) {
    this._behaviorData.CohesionWeight = newValue;
  }
  _getAlignmentWeight() {
    return this._behaviorData.AlignmentWeight !== undefined ? this._behaviorData.AlignmentWeight : Number("1") || 0;
  }
  _setAlignmentWeight(newValue) {
    this._behaviorData.AlignmentWeight = newValue;
  }
  _getSeparationWeight() {
    return this._behaviorData.SeparationWeight !== undefined ? this._behaviorData.SeparationWeight : Number("2") || 0;
  }
  _setSeparationWeight(newValue) {
    this._behaviorData.SeparationWeight = newValue;
  }
  _getTrajectoryDistance() {
    return this._behaviorData.TrajectoryDistance !== undefined ? this._behaviorData.TrajectoryDistance : Number("") || 0;
  }
  _setTrajectoryDistance(newValue) {
    this._behaviorData.TrajectoryDistance = newValue;
  }
}

/**
 * Shared data generated from Boids Movement
 */
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.SharedData = class BoidsMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._BoidsMovement_BoidsMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._BoidsMovement_BoidsMovementSharedData = new gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._BoidsMovement_BoidsMovementSharedData;
}

// Methods:
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreatedContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreatedContext.userFunc0xeae668 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

runtimeScene.__boidsExtension = runtimeScene.__boidsExtension || {
    boidsManager: new gdjs.__boidsExtension.BoidsManager(),
};

const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
behavior.__boidsExtension = behavior.__boidsExtension || {
    boid: runtimeScene.__boidsExtension.boidsManager.add(behavior),
};
};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__BoidsMovement__DefineHelperClasses.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreatedContext.userFunc0xeae668(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.userFunc0x9b9660 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
runtimeScene.__boidsExtension.boidsManager.moveAll();
};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.userFunc0x9b9660(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__BoidsBehaviour_hasAlreadyRunThisFrame"), false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__BoidsBehaviour_hasAlreadyRunThisFrame"), true);
}
{ //Subevents
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__BoidsBehaviour_hasAlreadyRunThisFrame"), false);
}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onActivateContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onActivateContext.GDObjectObjects1= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onActivateContext.userFunc0x8eab20 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
runtimeScene.__boidsExtension.boidsManager.add(behavior);
};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onActivateContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onActivateContext.GDObjectObjects1);
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onActivateContext.userFunc0x8eab20(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onActivateContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDeActivateContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDeActivateContext.GDObjectObjects1= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDeActivateContext.userFunc0x9b9468 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
runtimeScene.__boidsExtension.boidsManager.remove(behavior);
};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDeActivateContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDeActivateContext.GDObjectObjects1);
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDeActivateContext.userFunc0x9b9468(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDeActivateContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDestroyContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDestroyContext.userFunc0xeac6d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
runtimeScene.__boidsExtension.boidsManager.remove(behavior);
};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDestroyContext.userFunc0xeac6d8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveInDirectionContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveInDirectionContext.GDObjectObjects1= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveInDirectionContext.userFunc0x8eaa78 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const directionX = eventsFunctionContext.getArgument("DirectionX");
const directionY = eventsFunctionContext.getArgument("DirectionY");
const decisionWeight = eventsFunctionContext.getArgument("DecisionWeight");

behavior.__boidsExtension.boid.addIntent(directionX, directionY, decisionWeight);
};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveInDirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveInDirectionContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveInDirectionContext.GDObjectObjects1);
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveInDirectionContext.userFunc0x8eaa78(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveInDirection = function(DirectionX, DirectionY, DecisionWeight, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "DirectionX") return DirectionX;
if (argName === "DirectionY") return DirectionY;
if (argName === "DecisionWeight") return DecisionWeight;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveInDirectionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveInDirectionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveInDirection(eventsFunctionContext.getArgument("TargetX") - (gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext.GDObjectObjects1[i].getCenterXInScene()), eventsFunctionContext.getArgument("TargetY") - (gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext.GDObjectObjects1[i].getCenterYInScene()), eventsFunctionContext.getArgument("DecisionWeight"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPosition = function(TargetX, TargetY, DecisionWeight, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "TargetX") return TargetX;
if (argName === "TargetY") return TargetY;
if (argName === "DecisionWeight") return DecisionWeight;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToPositionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.forEachIndex2 = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.forEachObjects2 = [];

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.forEachTemporary2 = null;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.forEachTotalCount2 = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDObjectObjects2= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TargetedObject"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects1);

for (gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.forEachIndex2 = 0;gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.forEachIndex2 < gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects1.length;++gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.forEachIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDObjectObjects2);
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects2.length = 0;


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.forEachTemporary2 = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects1[gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.forEachIndex2];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects2.push(gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveToPosition((( gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects2[0].getCenterXInScene()), (( gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects2[0].getCenterYInScene()), eventsFunctionContext.getArgument("DecisionWeight"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObject = function(TargetedObject, DecisionWeight, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TargetedObject": TargetedObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "TargetedObject": gdjs.objectsListsToArray(TargetedObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "DecisionWeight") return DecisionWeight;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.GDTargetedObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MoveToObjectContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects3= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1, gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrajectoryDistance() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2[k] = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveInDirection(-((eventsFunctionContext.getArgument("CenterY") - (gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2[i].getCenterYInScene()))), eventsFunctionContext.getArgument("CenterX") - (gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2[i].getCenterXInScene()), eventsFunctionContext.getArgument("DecisionWeight"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrajectoryDistance() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveInDirection(eventsFunctionContext.getArgument("CenterY") - (gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getCenterYInScene()), -((eventsFunctionContext.getArgument("CenterX") - (gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getCenterXInScene()))), eventsFunctionContext.getArgument("DecisionWeight"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTrajectoryDistance(((gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).VelocityX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * ((gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getCenterYInScene()) - eventsFunctionContext.getArgument("CenterY")) + (gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).VelocityY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * (eventsFunctionContext.getArgument("CenterX") - (gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getCenterXInScene()))) / (gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Speed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrajectoryDistance() > -(eventsFunctionContext.getArgument("Radius")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrajectoryDistance() < eventsFunctionContext.getArgument("Radius") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPosition = function(CenterX, CenterY, Radius, DecisionWeight, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "CenterX") return CenterX;
if (argName === "CenterY") return CenterY;
if (argName === "Radius") return Radius;
if (argName === "DecisionWeight") return DecisionWeight;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidPositionContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.forEachIndex2 = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.forEachObjects2 = [];

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.forEachTemporary2 = null;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.forEachTotalCount2 = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDObjectObjects2= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("AvoidedObject"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects1);

for (gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.forEachIndex2 = 0;gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.forEachIndex2 < gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects1.length;++gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.forEachIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDObjectObjects2);
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects2.length = 0;


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.forEachTemporary2 = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects1[gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.forEachIndex2];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects2.push(gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AvoidPosition((( gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects2[0].getCenterXInScene()), (( gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects2[0].getCenterYInScene()), eventsFunctionContext.getArgument("Radius"), eventsFunctionContext.getArgument("DecisionWeight"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObject = function(AvoidedObject, Radius, DecisionWeight, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "AvoidedObject": AvoidedObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "AvoidedObject": gdjs.objectsListsToArray(AvoidedObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "Radius") return Radius;
if (argName === "DecisionWeight") return DecisionWeight;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.GDAvoidedObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AvoidObjectContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SpeedContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SpeedContext.GDObjectObjects1= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SpeedContext.userFunc0x9b94c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const directionX = eventsFunctionContext.getArgument("DirectionX");
const directionY = eventsFunctionContext.getArgument("DirectionY");
const decisionWeight = eventsFunctionContext.getArgument("DecisionWeight");

eventsFunctionContext.returnValue = behavior.__boidsExtension.boid.velocity.magnitude();
};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SpeedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SpeedContext.GDObjectObjects1);
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SpeedContext.userFunc0x9b94c0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.Speed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SpeedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityXContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityXContext.GDObjectObjects1= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityXContext.userFunc0x8eaa20 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const directionX = eventsFunctionContext.getArgument("DirectionX");
const directionY = eventsFunctionContext.getArgument("DirectionY");
const decisionWeight = eventsFunctionContext.getArgument("DecisionWeight");

eventsFunctionContext.returnValue = behavior.__boidsExtension.boid.velocity.x;
};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityXContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityXContext.GDObjectObjects1);
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityXContext.userFunc0x8eaa20(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityYContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityYContext.GDObjectObjects1= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityYContext.userFunc0x9b94c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const directionX = eventsFunctionContext.getArgument("DirectionX");
const directionY = eventsFunctionContext.getArgument("DirectionY");
const decisionWeight = eventsFunctionContext.getArgument("DecisionWeight");

eventsFunctionContext.returnValue = behavior.__boidsExtension.boid.velocity.y;
};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityYContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityYContext.GDObjectObjects1);
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityYContext.userFunc0x9b94c0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.VelocityYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxSpeedContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxSpeed(eventsFunctionContext.getArgument("MaxSpeed"));
}
}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxSpeed = function(MaxSpeed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "MaxSpeed") return MaxSpeed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxAccelerationContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxAccelerationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxAccelerationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxAccelerationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxAcceleration(eventsFunctionContext.getArgument("SteeringForce"));
}
}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxAcceleration = function(SteeringForce, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "SteeringForce") return SteeringForce;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetMaxAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldRotate() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.GDObjectObjects1[k] = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.ShouldRotateContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxSpeedContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxSpeed(); }}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxAccelerationContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxAcceleration(); }}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxAcceleration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.MaxAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionRadiusContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCohesionRadius(); }}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionRadius = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionRadiusContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionRadiusContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCohesionRadius(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionRadius = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentRadiusContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAlignmentRadius(); }}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentRadius = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentRadiusContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentRadiusContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAlignmentRadius(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentRadius = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationRadiusContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSeparationRadius(); }}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationRadius = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationRadiusContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationRadiusContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSeparationRadius(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationRadius = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionWeightContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionWeightContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionWeightContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionWeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCohesionWeight(); }}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionWeight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionWeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionWeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.CohesionWeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionWeightContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionWeightContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionWeightContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionWeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionWeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionWeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionWeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCohesionWeight(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionWeight = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionWeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionWeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetCohesionWeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentWeightContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentWeightContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentWeightContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentWeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAlignmentWeight(); }}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentWeight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentWeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentWeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.AlignmentWeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentWeightContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentWeightContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentWeightContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentWeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentWeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentWeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentWeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAlignmentWeight(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentWeight = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentWeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentWeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetAlignmentWeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationWeightContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationWeightContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationWeightContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationWeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSeparationWeight(); }}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationWeight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationWeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationWeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SeparationWeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationWeightContext = {};
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationWeightContext.GDObjectObjects1= [];
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationWeightContext.GDObjectObjects2= [];


gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationWeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationWeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationWeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationWeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSeparationWeight(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationWeight = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationWeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationWeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement.prototype.SetSeparationWeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("BoidsMovement::BoidsMovement", gdjs.evtsExt__BoidsMovement__BoidsMovement.BoidsMovement);
