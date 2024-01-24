const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *',function(){
    console.log('oi',new Date().getSeconds())
})

setTimeout(()=>{
    tarefa1.cancel()
    console.log("Cancelando tarefa 1")
},15000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek=2
regra.hour=20
regra.second=10

const tarefa2 = schedule.scheduleJob(regra,()=>console.log("segunda tarefa",new Date().getSeconds()))