class LaserWallWarningGameObject extends GameObjects {
    constructor(){
        super("LaserWallWarning", ["LaserWallWarning"])
        this.addComponent(new Polygon(), {fillStyle: "#ff000060", points:Assets.platform})
        this.transform.scale = new Vector2(1.25, 0.3)
        this.addComponent(new LaserWallWarningController())
    }


}   