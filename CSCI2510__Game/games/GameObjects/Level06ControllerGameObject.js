class Level06ControllerGameObject extends GameObjects {
    constructor() {
        super("Level06ControllerGameObject")
        this.addComponent(new Level06Controller()) 
    }
}   