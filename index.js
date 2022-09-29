let cats = document.querySelectorAll("main .container .boxes .contain .box .content .head span.cat")
let hours = document.querySelectorAll("main .container .boxes .contain .box .time h1.hour")
let hour = document.querySelectorAll("main .container .boxes .contain .box .time p .hour")

let lis = document.querySelectorAll('main .container section .contain nav ul li')


lis.forEach(li=>{
    li.addEventListener('click',function(){
        lis.forEach(li=>{
            li.classList.remove('active')
        })
        li.classList.add('active')
        let id = li.textContent
        fetch("./data.json")
        .then((response) => response.json())
        .then((json) =>{
            hours.forEach(function callback(h,i){
                h.innerHTML = json[i].timeframes[`${id.toLowerCase()}`].current + "hrs"
            }) 
            hour.forEach(function callback(h,i){
                h.innerHTML = json[i].timeframes[`${id.toLowerCase()}`].previous
            }) 
        } 
        )
    })
})
fetch("./data.json")
.then((response) => response.json())
.then((json) =>{
    cats.forEach(function callback(cat,i){
        cat.innerHTML = json[i].title
    }) 
    hours.forEach(function callback(h,i){
        h.innerHTML = json[i].timeframes['daily'].current + "hrs"
    }) 
    hour.forEach(function callback(h,i){
        h.innerHTML = json[i].timeframes['daily'].previous
    }) 
} 
)