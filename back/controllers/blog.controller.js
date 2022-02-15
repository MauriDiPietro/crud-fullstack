import BlogModel from '../models/blog.model';

export const getAllBlogs = async (req, res)=>{
    try{
        const blogs = await BlogModel.findAll();
        res.json(blogs)
    }catch(err){
        res.json({message: error.message});
    }
};

export const getBlog = async (req, res)=>{
    try{
        const blog = await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(blog)
    }catch(err){
        res.json({message: error.message});
    }
};

export const createBlog = async (req, res)=>{
    try{
        const blog = await BlogModel.create(req.body);
        res.json({
            'message': `Registro creado correctamente, title= ${req.body.title}, content= ${req.body.content}`
        })
    }catch(err){
        res.json({message: error.message});
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
            'message': `Registro id=${id} actualizado correctamente`
        })
    }catch(err){
        res.json({message: error.message});
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
            'message': `Registro id= ${id} eliminado`
        })
    }catch(err){
        res.json({message: error.message});
    }
};