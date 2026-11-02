class TeleporterTwoController extends Component{
    
    onCollisionStay(other){

        let teleporterExit = GameObjects.find("TeleporterOne")

        let teleporterExitPosition = teleporterExit.transform.position

        console.log("Teleporting to TeleporterOne")
        other.transform.position = teleporterExitPosition.plus(new Vector2(0, 100))

    }

}