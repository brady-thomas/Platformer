class TimeDisplayGameObject extends GameObjects{
    constructor(){
        super("TimeDisplayGameObject", ["TimeDisplayGameObject"], "UI")
        this.addComponent(new TextLabel(), {text:"0.01", font:"12px Courier New"})
        this.transform.scale = new Vector2(3,3)
        this.addComponent(new TimeDisplayComponent())
        
    }
}