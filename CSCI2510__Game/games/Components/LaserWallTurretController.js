class LaserWallTurretController extends Component{

    start(){
        this.laserWallTimer = 1
        this.laserWallActive = false
        this.laserWallActiveTimer = 0
    }




    update(){
        if (!this.laserWallActive) {
            this.laserWallTimer += Time.deltaTime}

        if (this.laserWallActive) {
            this.laserWallActiveTimer += Time.deltaTime
        }

        if (this.laserWallTimer >=  1.5){
            this.laserWallTimer = 0
            
            instantiate(new LaserWallGameObject(), this.transform.position.clone().plus(new Vector2(0, 150)), Math.PI / 2)
            this.laserWallActive = true
        }

        if (this.laserWallActiveTimer >= 1) {
            let laserWallObjects = GameObjects.findGameObjectsWithTag("LaserWall")
            for (const laserWallObject of laserWallObjects) {
                laserWallObject.destroy()
            }
            this.laserWallActive = false
            this.laserWallActiveTimer = 0
        }


    }




}