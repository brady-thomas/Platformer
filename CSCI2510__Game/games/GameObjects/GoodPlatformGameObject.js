class GoodPlatformGameObject extends GameObjects{

    constructor(){
        super("GoodPlatform")
        this.addComponent(new Polygon(), {fillStyle: "forestgreen", points:Assets.platform})
        this.transform.scale = new Vector2(0.5, 1)

    }

}