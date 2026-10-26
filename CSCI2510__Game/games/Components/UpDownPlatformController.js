class UpDownPlatformController extends Component {
    start(){
        this.direction = 1
    }

    update() {

        this.transform.position.y -= Time.deltaTime * 300 * this.direction

        if (this.transform.position.y < -100){
            this.direction = -1
        }
        
        if (this.transform.position.y > 250){
            this.direction = 1
        }

    }


}