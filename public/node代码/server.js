const { Person } = require('./model.js')

const express = require('express')

const app = express()
app.use(express.json())
app.use(require('cors')())

// 获取列表所有数据的接口
app.get('/api/personlist',async (req, res)=>{
    const allData = await Person.find()
    res.send(allData)
})

// 根据id删除的接口
app.delete('/api/personDel/:id', async (req, res)=>{
    // 在数据库寻找它
    const personitem = await Person.findById(req.params.id)
    await personitem.remove()
    res.send({
        msg: '删除成功'
    })
})

// 新增的接口
app.post('/api/personAdd', async (req, res)=>{
    const data = req.body
    const userinfo = await Person.create(data)
    res.send(userinfo)
})

// 更新的接口

app.put('/api/personUpdate/:id', async (req,res)=>{
    const personitem = await Person.findById(req.params.id)
    personitem.date = req.body.date
    personitem.name = req.body.name
    personitem.address = req.body.address
    await personitem.save()
    res.send({
        success: true
    })
})

// 查找

app.get('/api/searchByName/:name', async (req,res)=>{
    const data = await Person.find().where({
        name: req.params['name']
    })
    if(data.length !== 0){
        res.send(data)
    }else{
        res.send({
            unfind: true
        })
    }
})

app.get('/api/searchByDate/:date', async (req,res)=>{
    const data = await Person.find().where({
        date: req.params['date']
    })
    if(data){
        res.send(data)
    }else{
        res.send({
            unfind: true
        })
    }
})

app.get('/api/searchByAddress/:address', async (req,res)=>{
    const data = await Person.find().where({
        address: req.params['address']
    })
    if(data){
        res.send(data)
    }else{
        res.send({
            unfind: true
        })
    }
})



app.listen(5500, ()=>{
    console.log('http://localhost:5500')
})