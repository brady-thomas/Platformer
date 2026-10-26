class Camera extends Component {
    backgroundColor = "black"

    static get main(){
        return GameObjects.findGameObjectsWithTag("MainCamera")[0].getComponent(Camera)
    }
}
