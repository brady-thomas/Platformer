class ControlsTextLabel01 extends GameObjects{
    constructor(){
        super("ControlsTextLabel", [], "UI")
        this.addComponent(new TextLabel(), {text: "Press 'WASD/Arrow Keys' to move.", font: "40px Courier New"})
        //this.transform.scale = new Vector2(2.5,2.5)
    }

}