let inputTag=document.querySelector("input");
let ulTag=document.querySelector("ul");
let count=0;
let totalh2=document.querySelector(".sum .total");
inputTag.addEventListener("keydown",function(e){
    // console.log(e.key);
    let keyTag=e.key;
    if(keyTag=="Enter"){
        let value=inputTag.value;
        // console.log(value);
        // if(value==""){    //also works
        //     return;
        // }
        if(value.length==0){
            return;
        }
        inputTag.value="";
        let liTag=document.createElement("li");
        liTag.innerHTML= `<div class="note">${value}</div>
                          <div class="delete"><i class="material-symbols-rounded">delete</i></div>`;
        
        count++;
        handleRemoval(liTag,count);
        ulTag.appendChild(liTag);
        totalh2.innerText=count;
        console.log(count);
    }
})

function handleRemoval(liTag){
    let deleteDiv=liTag.querySelector(".delete");
    deleteDiv.addEventListener("click",function(){
        liTag.remove();
        count--;
        console.log(count);
        totalh2.innerText=count;
    })
}