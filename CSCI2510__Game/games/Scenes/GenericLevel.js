class GenericLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(150,575))
        this.instantiate(new TimeDisplayGameObject(), new Vector2(500, 50))
    }        

}