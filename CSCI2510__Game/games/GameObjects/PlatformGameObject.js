class PlatformGameObject extends GameObjects{
    constructor(){
        super("Platform", ["Platform"])
        this.addComponent(new Polygon(), {fillStyle: "darkblue", points:Assets.platform})
        this.addComponent(new PlatformController())
        

    }


}