class Spike extends GameObjects{
    constructor(){
        super("Spike", ["Spike"])
        this.addComponent(new Polygon(), {fillStyle: "FireBrick", points:Assets.triangle})
        this.transform.scale = new Vector2(3,4)




    }




}