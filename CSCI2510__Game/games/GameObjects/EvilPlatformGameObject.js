class EvilPlatformGameObject extends GameObjects{

    constructor(){
        super("EvilPlatform")
        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.platform})
        this.transform.scale = new Vector2(0.5, 1)


    }   

}   