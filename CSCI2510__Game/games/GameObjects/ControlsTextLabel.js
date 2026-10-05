class ControlsTextLabel extends GameObjects{
    constructor(){
        super("ControlsTextLabel")
        this.addComponent(new TextLabel(), {text: "Press 'WASD/Arrow Keys' to move.\nPress 'Space' to Jump.\nPress 'Shift' to dash."})
        this.transform.scale = new Vector2(2.5,2.5)
    }

}