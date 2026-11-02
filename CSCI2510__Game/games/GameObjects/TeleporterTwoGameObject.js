class TeleporterTwoGameObject extends GameObjects{
    constructor(){
        super("TeleporterTwo", ["TeleporterTwo"], "platforms")
        
        this.addComponent(new TeleporterTwoController())

        this.addComponent(new Polygon(), {fillStyle: "#80008095", points:Assets.platform})
        this.transform.scale = new Vector2(.5, 1)
        
        this.addComponent(new Collider())

    }
}