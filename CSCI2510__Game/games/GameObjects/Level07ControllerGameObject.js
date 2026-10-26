class Level07ControllerGameObject extends GameObjects {
    constructor() {
        super("Level07ControllerGameObject")
        this.addComponent(new Level07Controller()) 
    }
}   