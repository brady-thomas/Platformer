class PlatformGameObject extends GameObjects{
    constructor(){
        super("Platform", ["Platform"], "platforms")
        this.addComponent(new Polygon(), {fillStyle: "darkblue", points:Assets.platform})
        this.addComponent(new PlatformController())
        

        this.addComponent(new Collider())
    }


}