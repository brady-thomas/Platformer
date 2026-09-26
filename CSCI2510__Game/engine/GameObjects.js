class GameObjects{
    components = []

    markForDestroy = false

    name

    tags = []

    get transform(){
        return this.components[0]
    }



    constructor(name, tags = []){
        this.addComponent(new Transform())
        this.name = name
        this.tags = tags
    }

    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObjects = this
    }

    getComponent(type){
        return (this.components.find(c=>c instanceof type))
    }

    start(){
        for (const component of this.components.filter(c=>!c.didStart)){
            component.start?.()
            component.didStart = true
        }
    }

    update(){
        for (const component of this.components){
            component.update?.()
        }
    }
    

    destroy(){
        this.markForDestroy = true


    }


    draw(ctx){
        for (const component of this.components){
            component.draw?.(ctx)
        }
    }

    static find(name){
        return SceneManager.currentScene.gameObjects.find(go=>go.name == name)

    }

    static findGameObjectsWithTag(tag){
        return SceneManager.currentScene.gameObjects.filter(go=>go.tags.includes(tag))
    }

}   