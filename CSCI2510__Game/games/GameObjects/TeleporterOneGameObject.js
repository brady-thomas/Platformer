class TeleporterOneGameObject extends GameObjects{
    constructor(){
        super("TeleporterOne", ["TeleporterOne"], "platforms")
        
        this.addComponent(new TeleporterOneController())

        this.addComponent(new Polygon(), {fillStyle: "#80008095", points:Assets.platform})
        this.transform.scale = new Vector2(.5, 1)
        
        this.addComponent(new Collider())

    }
}