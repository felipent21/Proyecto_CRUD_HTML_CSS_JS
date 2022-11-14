const clientes = [{id:1, nombre:'pedro',telefono:"3008887766",ciudad:"CALI"}, 
                {id:2, nombre:'juan',telefono:"3214446699",ciudad:"BARANQUILLA"}]


function anadir(){
   
  borrardom();
  var ide = parseInt(document.getElementById('id').value);
  var nom= document.getElementById('nombre').value;
  var tel = document.getElementById('telefono').value;
  var ciu =document.getElementById('ciudad').value;
  ventas.push({id: ide, nombre: nom, telefono:tel, ciudad:ciu});
  alert('CLIENTE REGISTRADO')
  console.log(clientes);
   limpiar();
   
 } 

 function borrardom(){
  document.getElementById("tabla").innerHTML=""
  document.getElementById("tabla").innerHTML=`
  <tr>
  <td>ID    </td>
  <td>NOMBRE</td>
  <td>FECHA</td>
  <td>VALOR</td>
  </td> `

  }

  function limpiar(){

    document.getElementById('id').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value  = '';
    document.getElementById('ciudad').value  = '';

  }
  

  function mostrar(){

    var ide = document.getElementById('id').value;
    var nom= document.getElementById('nombre');
    var tel = document.getElementById('telefono');
    var ciu = document.getElementById('ciudad');


    for(let item in clientes){
      if (ide == clientes[item].id){
        nom.value = clientes[item].nombre;
        tel.value = clientes[item].telefono; 
        ciu.value = clientes[item].ciudad;
                   
      }        
    }
  }

  function eliminar(){
    borrardom();
    var ide = document.getElementById('id').value;
    clientes.forEach((item,index,arr)=>{
      if(item.id==ide)
      { arr.splice(index,1 )}
       alert("CLIENTE CON ID "+ide+"  ELIMINADO");  
     })
  }


  function editar(){
    borrardom();
    var ide= document.getElementById('id').value;
    if(ide == ''){
    alert('NO EXISTE EL REGISTRO');
  }
    else{
    var nom= document.getElementById('nombre');
    var tel = document.getElementById('telefono');
    var ciu = document.getElementById('ciudad');    
    elementIndex = clientes.findIndex(obj => obj.id == ide);
    clientes[elementIndex].nombre = nom;
    clientes[elementIndex].telefono = tel;  
    clientes[elementIndex].ciudad = ciu;      
    alert('CLIENTE ACTUALIZADO')
    limpiar();
  }
  }

  function ver(){
    contar();
    borrardom();
    var listaAccesos = document.getElementById('tabla');
    let tablaContent = ``
    for (const item of clientes) {
 
     tablaContent += `
    <tr>
     <td>${item.id}</td>
     <td>${item.nombre}</td>
     <td>${item.telefono}</td>
     <td>${item.ciudad}</td>
    </td>  
    `
  }
  listaAccesos.innerHTML += tablaContent
   }
  
   function contar(){
    
   
    let cuenta = clientes.length;

    document.getElementById('num').value = cuenta;


  }