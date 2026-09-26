class StartScreenGameObject extends GameObjects{
    constructor(){
        super("StartScreenLabel")

        this.addComponent(new StartScreenController())
        this.addComponent(new TextLabel(), {text:"Press Space to Start"})

        this.transform.scale = new Vector2(10,10)


    }




}