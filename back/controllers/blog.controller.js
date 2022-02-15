import BlogModel from '../models/blog.model.js';

export const getAllBlogs = async (req, res)=>{
    try{
        const blogs = await BlogModel.findAll();
        res.json(blogs)
    }catch(err){
        res.json({message: err.message});
    }
};

export const getBlog = async (req, res)=>{
    try{
        const blog = await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(blog[0])
    }catch(err){
        res.json({message: err.message});
    }
};

export const createBlog = async (req, res)=>{
    try{
        const blog = await BlogModel.create(req.body);
        res.json({
            'message': `Registro creado correctamente, title= ${req.body.title}, content= ${req.body.content}`
        })
    }catch(err){
        res.json({message: err.message});
    }
}

export const updateBlog = async (req, res)=>{
    try{
        await BlogModel.update(req.body, {
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

export const deleteBlog = async (req, res)=>{
    try{
        await BlogModel.destroy({
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