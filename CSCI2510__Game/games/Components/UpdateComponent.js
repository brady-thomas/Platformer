class UpdateComponent extends Component {

    speed = 480



    start(){
        this.timeSinceLastJump = 0
    }




    update() {
        this.timeSinceLastJump += Time.deltaTime

        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed

        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
        if (Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW"))
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
        
        let myPosition = this.transform.position
        let evilPlatform = GameObjects.find("EvilPlatform")

        let evilPlatPosition = evilPlatform.transform.position
        let distance = myPosition.minus(evilPlatPosition)

        //console.log(evilPlatform)

        let xDistance = Math.abs(distance.x)
        let yDistance = Math.abs(distance.y)

        //console.log("x",xDistance)
        //console.log("y",yDistance)


        
        if (xDistance < 81 && yDistance <301){
            //MainGameObject.GameObjects.destroy()
            console.log("died")
        }
    }

}
