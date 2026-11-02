class StartScreenController extends Component{


    update(){
        let startButton = GameObjects.find("StartButton")
        if (this.mouseIsOver){
            
            startButton.getComponent(Polygon).fillStyle = "gold"
        }
        else{
            startButton.getComponent(Polygon).fillStyle = "green"
        }

        this.mouseIsOver = false
    }

    onMouseOver(){
        console.log("mouse")
        this.mouseIsOver = true
        
    
        

        if (Input.mouseButtonsDown.includes(0)){
            SceneManager.loadScene(Level01)
        }


        
       
        
    }
}