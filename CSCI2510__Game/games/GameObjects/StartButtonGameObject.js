class StartButtonGameObject extends GameObjects {
    constructor() {
        super("StartButton", ["StartButton"], "platforms")
        this.addComponent(new Polygon(), {fillStyle: "green", points: Assets.square})

        
        this.transform.scale = new Vector2(8, 3)

        this.addComponent(new Collider(), {points: Assets.square})

        this.addComponent(new StartScreenController())

       
    }
}