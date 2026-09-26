class GoodPlatformController extends Component{


    update(){
        let myPosition = this.transform.position
        let goodPlatform = GameObjects.find("GoodPlatform")
        let mainCube = GameObjects.find("Main")
        let winCheck = GameObjects.find("WinCheck")


        if (goodPlatform) {
            let goodPlatformPosition = goodPlatform.transform.position
            let distanceFromGoodPlatform = myPosition.minus(goodPlatformPosition)
            let xDistanceGood = Math.abs(distanceFromGoodPlatform.x)
            let yDistanceGood = Math.abs(distanceFromGoodPlatform.y)
            if (xDistanceGood < 60 && yDistanceGood < 51) {
                mainCube.destroy()
                winCheck.destroy()
                console.log("won")
                

                
            }
        }
    }
}