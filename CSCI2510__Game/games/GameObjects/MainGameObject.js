class MainGameObject extends GameObjects{
    constructor(){
        super("Main", ["Main"], "player")
        this.addComponent(new UpdateComponent())
        this.addComponent(new DeathController())
        this.addComponent(new GoodPlatformController())
        this.addComponent(new Polygon(), {fillStyle: "DimGray", points: Assets.square})

        this.transform.scale = new Vector2(2.5, 2.5)


        this.addComponent(new Collider())
        
        this.addComponent(new RigidBody(), {gravity:1000})

    }
}