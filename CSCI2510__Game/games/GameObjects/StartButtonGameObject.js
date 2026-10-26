class StartButtonGameObject extends GameObjects {
    constructor() {
        super("StartButton", ["StartButton"], "UI")
        this.addComponent(new Polygon(), {fillStyle: "green", points: Assets.square})
        this.transform.scale = new Vector2(8, 3)



        this.addComponent(new StartScreenController())

        this.addComponent(new Collider(), {points: Assets.square})
    }

}