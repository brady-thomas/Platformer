class PlatformGameObject extends GameObjects{
    constructor(){
        super("Platform")
        this.addComponent(new Polygon(), {fillStyle: "darkblue", points:Assets.platform})


    }


}