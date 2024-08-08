import Task from "../models/task.model.js";
export const createTask = async(req, res) => {
    try{
        const {name} = req.body;
        const addTask = new Task({
            name,
        })
        const task = await addTask.save()
        console.log("Task", name)
        res.status(200).json(task)
    }
    catch(error)
    {
        console.log(Error)
    }
}
export const updateTask = async(req, res) => {
    try{
        const {name} = req.body;
        const {id} = req.params;
        const utask = await Task.findByIdAndUpdate(id, { name }, { new: true });       /{new:true} tells mongoose to return new documet insted of orginal/
        
        if(!utask){
              console.log(`Task has not been update ${utask}`)
          }
         else{
              console.log(`Task has been updated${utask}`) 
          }

        res.status(201).json(utask)
        }
    

    catch(error)
    {
        console.log(Error)
    }
}
export const getTask = async(req, res) => {
    try{
        const {id} = req.params;
        console.log(typeof id)
        if(id == null){
            const usertask = await Task.find();
            console.log(usertask)
            res.json(usertask);
            
        }
        else{
            const gtask = await Task.findByIdAndUpdate(id);
            if(!gtask){
                console.log(`Task is not aviable`)
            }
           else{
                console.log(`Task is aviable ${gtask}`) 
            }
            res.json(gtask)
            console.log(`${id}`)
        }

    }
    catch(error)
    {
        console.log(Error)
    }
}
export const deleteTask = async(req, res) => {
    try{
        const {id} = req.params;
        if(id == null){
            console.log("Does Not Found Id")   
        }
        else{
            const delTask = await Task.findByIdAndDelete(id)
            res.json({message: `Task has been deleted`, task: delTask})
        
        }
    }
    catch(error){
        console.log("Error")
    }

}
