class Level01ControllerGameObject extends GameObjects{
    constructor(){
        super("Level01ControllerGameObject")
        this.addComponent(new Level01Controller())
    }


}