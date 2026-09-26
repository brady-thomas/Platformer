class StartScreenController extends Component{


    update(){

        if (Input.keysDown.includes('Space')){
            SceneManager.loadScene(Level01)

        }
    }
}