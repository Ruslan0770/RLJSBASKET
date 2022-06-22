if(localStorage.getItem('basket')===null){
    localStorage.setItem('basket',JSON.stringify([]));
}
let a=document.querySelectorAll('.ahref');
for(let ahr of a){
    ahr.addEventListener('click',function(e){
        let basket=JSON.parse(localStorage.getItem("basket"));
        e.preventDefault();
        let cloudid=e.target.parentElement.parentElement.id;
        let cloud=e.target.parentElement.previousElementSibling.src;
        let cloudname=e.target.previousElementSibling.previousElementSibling.innerHTML;
        let cloudprice=e.target.previousElementSibling.innerHTML;
        console.log(cloudid);
        console.log(cloud);
        console.log(cloudname);
        console.log(cloudprice);

        let haveprod=basket.find(x => x.id == cloudid);
        if(haveprod==undefined){
            basket.push({
               id:cloudid,
               img:cloud,
               namee:cloudname,
               price:cloudprice,
               count:1
            })
        }
        else{
            haveprod.count+= 1;
        }
        
        localStorage.setItem('basket',JSON.stringify('basket'))
        newfunc();
        alert('product elave edildi');
}
    function newfunc() {
    let basket=JSON.parse(localStorage.getItem('basket'));
    document.getElementById("count").innerHTML=basket.length
}
    
newfunc();

       

           


    