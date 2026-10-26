class EvilPlatformGameObject extends GameObjects{

    constructor(){
        super("EvilPlatform", ["EvilPlatform"], "evil")
        this.addComponent(new Polygon(), {fillStyle: "FireBrick", points:Assets.platform})
        this.transform.scale = new Vector2(0.5, 1)

        this.addComponent(new Collider())
    }   

}   