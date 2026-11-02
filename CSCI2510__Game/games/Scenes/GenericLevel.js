class GenericLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(-500,200))
        this.instantiate(new TimeDisplayGameObject(), new Vector2(650, 50))
    }        

}

