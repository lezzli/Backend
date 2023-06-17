const pool = require('../db')

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM product where status = $1", [1])
        res.json(allProducts.rows)
    } catch (error) {
        res.send(error.message)
    }
}

const getSingleProduct = async(req, res) => {
    try {
    const {id} = req.params
    const result = await pool.query("SELECT * FROM product WHERE id = $1", [id])
    
        if(result.rows.length ===0)
        return res.status(404).json({
            message:"product not found"
        })
        res.json(result.rows[0])
    } catch (error) {
        console.log(error.message)
        
    }
}

const createNewProduct = async (req, res) => {
 const { name, description } = req.body

 const result = await pool.query("INSERT INTO product (name, description) VALUES ($1, $2) RETURNING *" ,[
    name,
    description
 ])
   console.log(result)
   res.send(result.rows[0])
}

const deleteProduct = (req, res) => {
    res.send("delete")
}

const updateProduct = (req, res) => {
    res.send("update")
}

module.exports ={
getAllProducts,
getSingleProduct,
createNewProduct,
deleteProduct,
updateProduct

}