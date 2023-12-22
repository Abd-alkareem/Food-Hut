//format the active link changing
let varName = [];
let currentLink = 1;
for(let i = 0;i<=7;i++){
    if(i == 6) continue;
    varName[i] = document.body.children[i].clientHeight;
}
varName = varName.filter((name)=>{
    return name != null;
})

for(let i = 1; i<varName.length;i++){
    varName[i] += varName[i-1];
}

window.addEventListener("scroll",()=>{

    for(let i = varName.length; i >= 0;i--){
    if(window.scrollY < varName[i] - 120){
            currentLink = i;
    }else
    continue;
    }
    document.querySelectorAll("header ul li a").forEach((e)=>{
        e.classList.remove("active");
    })
    document.querySelectorAll("header ul li a")[currentLink].classList.add("active");
});







//format the header background
window.addEventListener("scroll",()=>{
    if(window.scrollY > 10){
        document.querySelector("header").classList.add("back-black");
    }
    else{
    document.querySelector("header").classList.remove("back-black");

    }
    if(window.innerWidth > 991){
        document.querySelector("header").classList.remove("force-black");
    }
});

window.onload =  () => {
    if(window.scrollY > 0){
        document.querySelector("header").classList.add("back-black");
    }
    else{
    document.querySelector("header").classList.remove("back-black");

    }
}

//formath the active link in the header
document.querySelectorAll("header ul li a").forEach((link)=>{
    link.addEventListener("click",()=>{
        document.querySelectorAll("header ul li a").forEach((e)=>{
            e.classList.remove("active");
        })
    link.classList.add("active");    

    document.querySelectorAll("header ul").forEach((ul)=>{
    ul.classList.toggle("h-0");
        
    })
    document.querySelector("header").classList.toggle("force-black");
    })
})

//format the minu btn in the header
document.querySelector("header i").addEventListener("click",()=>{
    document.querySelectorAll("header ul").forEach((ul)=>{
        ul.classList.toggle("h-0");
        
    })
    document.querySelector("header").classList.toggle("force-black");
})


//formath the blog section

//  //the controle btns
document.querySelectorAll(".bolg-section .controle span ").forEach((btn,btnInd) => {
    btn.addEventListener("click",()=>{
        document.querySelectorAll(".bolg-section .controle span ").forEach((e) => {
            e.classList.remove("active");
        })
        document.querySelectorAll(".bolg-section .holder .slide ").forEach((slide)=>{
            slide.classList.add("hidden");
            slide.classList.remove("active");
        })
    setTimeout(function(){
        document.querySelectorAll(".bolg-section .holder .slide ")[btnInd].classList.add("active");
        document.querySelectorAll(".bolg-section .holder .slide ")[btnInd].classList.remove("hidden");

    },200)
    btn.classList.add("active");
    })
})