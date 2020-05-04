"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikesComponent = /** @class */ (function () {
    function LikesComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(LikesComponent.prototype, "likesCount", {
        //Read-Only Property
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikesComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    LikesComponent.prototype.onClick = function () {
        //Original Code
        /*if(this._isSelected){
            this._likesCount--;
            this._isSelected=false;
        } else{
            this._likesCount++;
            this._isSelected=true;
        }*/
        //Refactoring the above code
        this._likesCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    return LikesComponent;
}());
exports.LikesComponent = LikesComponent;
