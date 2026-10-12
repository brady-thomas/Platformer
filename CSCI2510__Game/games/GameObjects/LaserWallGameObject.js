class LaserWallGameObject extends GameObjects {
    constructor() {
        super("LaserWall", ["LaserWall"])
        this.addComponent(new Polygon(), {fillStyle: "red", points: Assets.platform})
        this.transform.scale = new Vector2(1.25, .75)


    }
}