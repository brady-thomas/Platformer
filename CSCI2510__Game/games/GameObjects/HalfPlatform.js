class HalfPlatform extends GameObjects{
    constructor(){
        super("HalfPlatform")
        this.addComponent(new Polygon(), {fillStyle: "darkblue", points: Assets.platform})
        this.transform.scale = new Vector2(.5, 1)




    }




}