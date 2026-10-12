class UpDownPlatformGameObject extends GameObjects {
    constructor() {
        super("UpDownPlatform")
        this.addComponent(new Polygon(), {fillStyle: "darkblue", points:Assets.platform} )
        this.transform.scale = new Vector2(.5, 1)
        this.addComponent(new UpDownPlatformController())
    }
}