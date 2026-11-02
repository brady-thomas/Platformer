class Level01Controller extends Component{
    start(){
        SceneManager.loadScene(GenericLevel, true)

    }

    update(){
        let winCheck = GameObjects.find("WinCheck")
        if (!winCheck){
            SceneManager.loadScene(Level02)
        }

        if(Input.keysDown.includes("KeyM")){
            SceneManager.loadScene(Level09)
        }

        if(Input.keysDown.includes("KeyN")){
            SceneManager.loadScene(Level11)
        }

    }


    


}
    