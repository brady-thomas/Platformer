class TimeDisplayComponent extends Component{
    update(){
        const minutes = Math.floor(Globals.timeDisplay / 60)
        const seconds = Math.floor(Globals.timeDisplay % 60)
        const milliseconds = Math.floor(((Globals.timeDisplay) * 100) % 100)
    

        this.gameObjects.getComponent(TextLabel).text = String(minutes).padStart(2,0) + ':' + String(Math.floor(seconds)).padStart(2,0) + ':' + String(milliseconds).padStart(2,0)
    }
}       