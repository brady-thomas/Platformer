class SpinningLaserGameObject extends GameObjects{
    constructor(){
        super("SpinningLaser", ["SpinningLaser"], "evil")

        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.platform})
        
        this.transform.scale = new Vector2(1, .5)



        this.addComponent(new Polygon(), {fillStyle: "RebeccaPurple", points:[
            new Vector2 (-13, 28),
            new Vector2 (-13, -28),
            new Vector2 (13, -28),
            new Vector2 (13, 28)

        ]})

        this.addComponent(new Collider())

        this.addComponent(new SpinningLaserController())
    }
}