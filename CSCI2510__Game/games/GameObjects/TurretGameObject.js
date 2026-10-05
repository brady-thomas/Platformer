class TurretGameObject extends GameObjects {
    constructor() {
        super("Turret", ["Turret"])
        this.addComponent(new TurretController())
        this.addComponent(new Polygon(), {fillStyle: "darkmagenta", points:Assets.platform})
        this.transform.scale = new Vector2(.25, 1)
    }
}