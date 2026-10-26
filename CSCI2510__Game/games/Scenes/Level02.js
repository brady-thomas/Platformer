class Level02 extends Scene{
    constructor(){
        super()
        this.instantiate(new PlatformGameObject(), new Vector2(-500, 250))
        this.instantiate(new PlatformGameObject(), new Vector2(-300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(500,250))
        

        this.instantiate(new GoodPlatformGameObject(), new Vector2(550,250))


        this.instantiate(new Level02ControllerGameObject())


        this.instantiate(new Spike(), new Vector2(0,185))


        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
    



    }

}