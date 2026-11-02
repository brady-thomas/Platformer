class Level08ControllerGameObject extends GameObjects {
    constructor() {
        super("Level08ControllerGameObject")
        this.addComponent(new Level08Controller()) 
    }
}   