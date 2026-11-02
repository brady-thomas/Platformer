class Level09 extends Scene{
    constructor(){
        super()

        this.instantiate(new Level09ControllerGameObject())
        this.instantiate(new WinCheckGameObject(), new Vector2(-1000, -1000))


        
        this.instantiate(new PlatformGameObject(), new Vector2(-500,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(500,250))
        this.instantiate(new GoodPlatformGameObject(), new Vector2(550,250))


        this.instantiate(new SpinningLaserGameObject(), new Vector2(150,250))
        this.instantiate(new SpinningLaserGameObject(), new Vector2(0,50))
        this.instantiate(new SpinningLaserGameObject(), new Vector2(-150,250))

        




    }




}