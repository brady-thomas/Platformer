class MainGameObject extends GameObjects{
    constructor(){
        super("Main")
        this.addComponent(new UpdateComponent())
        this.addComponent(new DeathController())
        this.addComponent(new GoodPlatformController())
        this.addComponent(new Polygon(), {fillStyle: "DimGray", points: [
            new Vector2(-25, -25),
            new Vector2(25, -25),
            new Vector2(25, 25),
            new Vector2(-25, 25)
        

        ]})
    }
}