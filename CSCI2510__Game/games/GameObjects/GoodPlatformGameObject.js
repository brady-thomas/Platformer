class GoodPlatformGameObject extends GameObjects{

    constructor(){
        super("GoodPlatform", ["GoodPlatform"], "evil")
        this.addComponent(new Polygon(), {fillStyle: "forestgreen", points:Assets.platform})
        this.transform.scale = new Vector2(0.5, 1)


        this.addComponent(new Collider())

    }

}