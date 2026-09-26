class WinCheckGameObject extends GameObjects{
    constructor(){
        super("WinCheck")
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.triangle})

    }
    



}