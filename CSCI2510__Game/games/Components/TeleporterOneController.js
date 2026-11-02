class TeleporterOneController extends Component{
    
    



    
    
    
    
    onCollisionStay(other){

        console.log("Teleporting to TeleporterTwo")

        let teleporterExit = GameObjects.find("TeleporterTwo")

        let teleporterExitPosition = teleporterExit.transform.position

        
        other.transform.position = teleporterExitPosition.plus(new Vector2(0, 100))

    }

}