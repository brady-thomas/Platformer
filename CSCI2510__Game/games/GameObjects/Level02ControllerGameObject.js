class Level02ControllerGameObject extends GameObjects{
    constructor(){
        super("Level02ControllerGameObject")
        this.addComponent(new Level02Controller())
    }



}