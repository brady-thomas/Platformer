class LaserGameObject extends GameObjects {
    constructor() {
        super()
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.triangle})
        this.transform.scale = new Vector2(1, 2)
    }
    
}