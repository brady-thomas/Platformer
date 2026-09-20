class MainGameObject extends GameObjects{
    constructor(){
        super("Main")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle: "black", points: [
            new Vector2(100, 350),
            new Vector2(150, 350),
            new Vector2(150, 400),
            new Vector2(100, 400)
        

        ]})
    }
}