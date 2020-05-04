export class LikesComponent {

    constructor(private _likesCount: number, private _isSelected: boolean) { }

    //Read-Only Property
    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }

    onClick(){
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
        this._isSelected=!this._isSelected;
    }
}