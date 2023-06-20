const readdata = (req,res)=> {
res.send({
msg:"Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes."
})
}
const fetchdata = (req,res)=> {
    res.send({
    msg:"fetchdata "
    })
    }
    const createdata = (req,res)=> {
        res.send({
        msg:"createdata"
        })
        }
        const updatedata = (req,res)=> {
            res.send({
            msg:"updatedata"
            })
            }

            module.exports={readdata,fetchdata,createdata,updatedata}