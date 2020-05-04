"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikesComponent_1 = require("./LikesComponent");
var component = new LikesComponent_1.LikesComponent(10, false);
component.onClick();
console.log("Likes Count: " + component.likesCount + ", isSelected: " + component.isSelected);
