window.onload = () => {
    let numPage = 1;
    let idUser = 1;
    let btn1 = document.querySelector("#uno");
    let btn2 = document.querySelector("#dos");
    let btnId = document.querySelector("#search");
    let lista = document.querySelector("#usuarios");
    //let url = `https://reqres.in/api/users/${idUser}`;
    cargarDatos(`https://reqres.in/api/users/${idUser}`);

    btn1.addEventListener("click",()=>{
      numPage = 1;
      cargarDatos(`https://reqres.in/api/users?page=${numPage}`);
    })
    btn2.addEventListener("click",()=>{
      numPage = 2;
      cargarDatos(`https://reqres.in/api/users?page=${numPage}`);
    })

    function cargarDatos(url){
      lista.innerHTML = "";
      
      fetch(url)
      .then(res => res.json())
      .then(res => {

        let data = res.data;

        //console.log(data)

        //let lista = document.querySelector("#usuarios");
        //data.sort((a, b) => a.first_name.localeCompare(b.first_name));
        if (Array.isArray(data)){
          data.forEach((user) => {
            let avatar = `https://source.boringavatars.com/bauhaus/50/${user.first_name}%20${user.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
            let item=`<li class="user">
                      <img src="${avatar}" alt="${user.first_name} "/>
                      <span class="name">${user.first_name}</span>
                      <span class="surname"> ${user.last_name} </span>
                      </li>`;
          lista.innerHTML += item;
        });
        }else{

          console.log(data.first_name)
          let avatar = `https://source.boringavatars.com/bauhaus/50/${data.first_name}%20${data.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
          let item=`<li class="user">
                    <img src="${avatar}" alt="${data.first_name} "/>
                    <span class="name">${data.first_name}</span>
                    <span class="surname"> ${data.last_name} </span>
                    </li>`;
          lista.innerHTML += item;



          // btnId.addEventListener("click",()=>{
          //   idUser = 1;
          //   cargarDatos(`https://reqres.in/api/users?page=${numPage}`);
          // })
          let loescrito = document.querySelector("#fruto");

          document.querySelector('#btnId').onclick = function(){
            console.log(loescrito.value)
            let valor = loescrito.value;
            if(loescrito.value == ''){
                alert("escribe algo ???????????  ??")
            }
            else{
              if(Number(valor)){
                if(valor>0 && valor<13){
                  document.querySelector("input").value = "";
                  cargarDatos(`https://reqres.in/api/users/${valor}`);
                }else{
                  alert("ese usuario no existe :((")
                }
              
              }else{
                alert("solo numeros ???????????  ??")
              }
              // ${loescrito.value};
      
              }
              

            }}
        
      })
      
      .then(() => {
          let monkeyList = new List('test-list', {
              valueNames: ['name', 'surname']
            });
      });
    }
    

}

