class Level02Controller extends Component{
    start(){
        SceneManager.loadScene(GenericLevel, true)

    }

    update(){
        let winCheck = GameObjects.find("WinCheck")
        if (!winCheck){
            SceneManager.loadScene(Level03)
        }

    }


}
