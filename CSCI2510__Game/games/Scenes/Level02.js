class Level02 extends Scene{
    constructor(){
        super()
        this.instantiate(new PlatformGameObject(), new Vector2(150,625))
        this.instantiate(new PlatformGameObject(), new Vector2(350,625))
        this.instantiate(new PlatformGameObject(), new Vector2(550,625))
        this.instantiate(new GoodPlatformGameObject(), new Vector2(650,625))

        this.instantiate(new Level02ControllerGameObject())


        this.instantiate(new Spike(), new Vector2(350,560))


        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
    



    }

}