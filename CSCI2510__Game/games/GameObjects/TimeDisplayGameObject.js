class TimeDisplayGameObject extends GameObjects{
    constructor(){
        super("TimeDisplayGameObject")
        this.addComponent(new TextLabel(), {text:"0.01"})
        this.transform.scale = new Vector2(3,3)
        this.addComponent(new TimeDisplayComponent())
        
    }
}