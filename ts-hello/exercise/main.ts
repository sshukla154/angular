import { LikesComponent } from "./LikesComponent";

var component = new LikesComponent(10, false);
component.onClick();
console.log(`Likes Count: ${component.likesCount}, isSelected: ${component.isSelected}`);