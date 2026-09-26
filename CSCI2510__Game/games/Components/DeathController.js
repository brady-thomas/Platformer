class DeathController extends Component {
    

    

    update(){

        let myPosition = this.transform.position
        let evilPlatforms = GameObjects.findGameObjectsWithTag("EvilPlatform")
        let mainCube = GameObjects.find("Main")
        let spikes = GameObjects.findGameObjectsWithTag("Spike")

    

        

        for (const evilPlatform of evilPlatforms){
            let evilPlatPosition = evilPlatform.transform.position
            let distanceFromEvil = myPosition.minus(evilPlatPosition)
            let xDistanceEvil = Math.abs(distanceFromEvil.x)
            let yDistanceEvil = Math.abs(distanceFromEvil.y)
            if (xDistanceEvil < 60 && yDistanceEvil < 51) {
                mainCube.destroy()
                console.log("died")
                SceneManager.currentScene = new Level01

            }
        }


        for (const spike of spikes) {
            let spikePosition = spike.transform.position
            let distanceFromSpike = myPosition.minus(spikePosition).magnitude
            //console.log(distanceFromSpike)
            if (distanceFromSpike < 40) {
                mainCube.destroy()
                console.log("died")
                SceneManager.currentScene = new Level02
            }
        }
        

        
         
    }

}