class TurretController extends Component {

    start(){
        this.timeSinceLastLaser = 29
        this.direction = 1
        this.startPosition = this.transform.position.clone()
    }

    update() {

        

        this.transform.position.y -= Time.deltaTime * 400 * this.direction

        if (this.transform.position.y < this.startPosition.y - 200){
            this.direction = -1
        }
        
        if (this.transform.position.y > this.startPosition.y + 25){
            this.direction = 1
        }



        this.timeSinceLastLaser += 1
        if (this.timeSinceLastLaser > 30) {
            this.timeSinceLastLaser = 0
            this.laser = instantiate(new LaserGameObject(), this.transform.position.clone(), Math.PI * 3 / 2) 
        }
    }
}