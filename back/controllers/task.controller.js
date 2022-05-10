import TaskModel from '../models/task.model.js';

export const getAllTasks = async (req, res)=>{
    try{
        const tasks = await TaskModel.findAll();
        res.json(tasks)
    }catch(err){
        res.json({message: err.message});
    }
};

export const getTask = async (req, res)=>{
    try{
        const task = await TaskModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(task[0])
    }catch(err){
        res.json({message: err.message});
    }
};

export const createTask = async (req, res)=>{
    try{
        const task = await TaskModel.create(req.body);
        res.json({
            'message': `Registro creado correctamente, title= ${req.body.title}`
        })
    }catch(err){
        res.json({message: err.message});
    }
}

export const updateTask = async (req, res)=>{
    try{
        await TaskModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message': `Registro actualizado correctamente`
        })
    }catch(err){
        res.json({message: err.message});
    }
};

export const deleteTask = async (req, res)=>{
    try{
        await TaskModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': `Registro eliminado`
        })
    }catch(err){
        res.json({message: err.message});
    }
};