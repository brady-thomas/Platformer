class LaserWallTurretGameObject extends GameObjects {
    constructor() {
        super("LaserWallTurret", ["LaserWallTurret"])
        this.addComponent(new Polygon(), {fillStyle: "sandybrown", points: Assets.square})
        this.transform.scale = new Vector2(2.5, 2.5)

        
        this.addComponent(new LaserWallTurretController())


    }
}