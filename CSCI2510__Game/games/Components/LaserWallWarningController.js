class LaserWallWarningController extends Component {
    start(){
        this.laserWallTimer = 0
    }

    update(){
        let laserWallWarnings = GameObjects.findGameObjectsWithTag("LaserWallWarning")
        this.laserWallTimer += Time.deltaTime

        if (this.laserWallTimer >=  .25){
            for (const warning of laserWallWarnings) {
            warning.getComponent(Polygon).fillStyle = "#FF000000"
            }
        }

        if (this.laserWallTimer >= .5) {
            for (const warning of laserWallWarnings) {
                warning.getComponent(Polygon).fillStyle = "#FF000060"
            }
            this.laserWallTimer = 0
        }
    }
}
