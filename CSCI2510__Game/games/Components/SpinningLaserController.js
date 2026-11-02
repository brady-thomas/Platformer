class SpinningLaserController extends Component{
    start(){
        
    }


    update(){
        this.transform.rotation += (Time.deltaTime * 2) % (Math.PI * 2)

    }
}