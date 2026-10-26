class StartScreenLabel01GameObject extends GameObjects{
    constructor(){
        super("StartScreenLabel01GameObject", ["StartScreenLabel01GameObject"], "UI")

        //this.addComponent(new StartScreenController())
       

        this.addComponent(new TextLabel(), {text:"Timer Starts Once You Click. Good Luck.", font: "40px Courier New"})

        

        
    }




}