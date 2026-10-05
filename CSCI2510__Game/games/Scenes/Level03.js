class Level03 extends Scene{
    constructor(){
        super()
        this.instantiate(new PlatformGameObject(), new Vector2(150,625))
        this.instantiate(new PlatformGameObject(), new Vector2(350,625))
        this.instantiate(new PlatformGameObject(), new Vector2(550,625))
        this.instantiate(new PlatformGameObject(), new Vector2(750,625))
        this.instantiate(new PlatformGameObject(), new Vector2(950,625))

        this.instantiate(new GoodPlatformGameObject(), new Vector2(1050,625))

        this.instantiate(new Level03ControllerGameObject())


        this.instantiate(new Spike(), new Vector2(350,560))
        this.instantiate(new Spike(), new Vector2(400,560))
        this.instantiate(new Spike(), new Vector2(450,560))
        this.instantiate(new Spike(), new Vector2(500,560))
        this.instantiate(new Spike(), new Vector2(550,560))
        this.instantiate(new Spike(), new Vector2(600,560))
        this.instantiate(new Spike(), new Vector2(650,560))
        this.instantiate(new Spike(), new Vector2(700,560))


        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
    


    }

}