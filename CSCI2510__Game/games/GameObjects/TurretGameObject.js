class TurretGameObject extends GameObjects {
    constructor() {
        super("Turret", ["Turret"])
        this.addComponent(new TurretController())
        this.addComponent(new Polygon(), {fillStyle: "darkmagenta", points:Assets.square})
        this.transform.scale = new Vector2(2.5, 2.5)
    }
}