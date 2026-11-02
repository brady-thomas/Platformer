class UpdateComponent extends Component {

    speed = 960



    start(){
        // this.isColliding = false
        // this.isCollidingDown = false
        // this.isCollidingUp = false
        // this.isCollidingRight = false
        // this.isCollidingLeft = false
    }




    update() {
        

        let isStartScene = SceneManager.currentScene
        if (!(isStartScene == "StartScene")){
            Globals.timeDisplay += Time.deltaTime
        }

        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))
            //if (!this.isCollidingRight) {
                this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed
            //}

        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))
            //if (!this.isCollidingLeft) {
                this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
            //}



        if (Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW"))
            //if (!this.isCollidingUp){
                this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
            //}

        if (Input.keysDown.includes("ArrowDown") || Input.keysDown.includes("KeyS")){
            //if (!this.isCollidingDown) {
                this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed
            //}
        }
    
    //    this.isCollidingDown = false 
    //    this.isCollidingUp = false 
    //    this.isCollidingRight = false 
    //    this.isCollidingLeft = false 
    //    this.isColliding = false 
        
        
        
    }

    onCollisionStay(other, minimumTransformVector){
    this.gameObjects.getComponent(RigidBody).velocity.y = 0
  }




}
