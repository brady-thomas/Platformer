class UpdateComponent extends Component {

    speed = 960



    start(){
        
    }




    update() {


        let isStartScene = SceneManager.currentScene
        if (!(isStartScene == "StartScene")){
            Globals.timeDisplay += Time.deltaTime
        }

        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed

        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
        if (Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW"))
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed

        if (Input.keysDown.includes("ArrowDown") || Input.keysDown.includes("KeyS")){
            if (this.transform.position.y < 575)
                this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed
        }
        
        
    }

}
