class LaserController extends Component {
    update() {
        this.transform.position.x -= Time.deltaTime * 600

        if (this.transform.position.x < 10) {
            this.gameObjects.destroy()  
        }
            
    
        let laserPosition = this.transform.position
        let mainCube = GameObjects.find("Main")

        if (mainCube){
            let myPosition = mainCube.transform.position
            let distance = myPosition.minus(laserPosition).magnitude
            if (distance < 25) {
                this.gameObjects.destroy()
                mainCube.destroy()
                console.log("died")
                SceneManager.loadScene(Level01)
            }
        }

            
    }

}
