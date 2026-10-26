class StartScreenLabel02GameObject extends GameObjects{
    constructor(){
        super("StartScreenLabel02GameObject", ["StartScreenLabel02GameObject"], "UI")
        this.addComponent(new TextLabel(), {text:"Start", font: "20px Courier New"})
    }
}