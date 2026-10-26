class LaserGameObject extends GameObjects {
    constructor() {
        super("Laser", ["Laser"], "evil")
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.triangle})
        this.transform.scale = new Vector2(1, 2)

        this.addComponent(new Collider())
    }
    
}