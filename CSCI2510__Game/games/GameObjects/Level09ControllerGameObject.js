class Level09ControllerGameObject extends GameObjects {
    constructor() {
        super("Level09ControllerGameObject")
        this.addComponent(new Level09Controller()) 
    }
}   