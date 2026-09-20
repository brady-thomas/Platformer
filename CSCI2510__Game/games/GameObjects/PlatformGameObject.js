class PlatformGameObject extends GameObjects{
    constructor(){
        super("Platform")
        this.addComponent(new Polygon(), {fillStyle: "blue", points:Assets.platform})


    }


}