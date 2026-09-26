class Level02ControllerGameObject extends GameObjects{
    constructor(){
        super("Level01ControllerGameObject")
        this.addComponent(new Level02Controller())
    }



}