

const ventas = [{id:1, cliente:'pedro',fecha:"2010/11/12",valor:2000}, 
                {id:2, cliente:'juan',fecha:"2010/11/12",valor:1000,}]

                
function anadir(){
   
  borrardom();
  var ide = parseInt(document.getElementById('id').value);
  var cli= document.getElementById('cliente').value;  
  var fec =document.getElementById('fecha').value;
  var val = parseFloat(document.getElementById('valor').value);
  ventas.push({id: ide, cliente: cli,  fecha:fec,valor:val,});
  alert('VENTA CREADA')
  console.log(ventas);
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
    document.getElementById('cliente').value = '';    
    document.getElementById('fecha').value  = '';
    document.getElementById('valor').value  = '';

  }
  

  function mostrar(){

    var ide = document.getElementById('id').value;
    var cli= document.getElementById('cliente');    
    var fec = document.getElementById('fecha');
    var val = document.getElementById('valor');


    for(let item in ventas){
      if (ide == ventas[item].id){
        cli.value = ventas[item].cliente;        
        fec.value = ventas[item].fecha;
        val.value = ventas[item].valor; 
                   
      }        
    }
  }

  function eliminar(){
    borrardom();
    var ide = document.getElementById('id').value;
    ventas.forEach((item,index,arr)=>{
      if(item.id==ide)
      { arr.splice(index,1 )}
       alert("VENTA CON ID "+ide+"  ELIMINADA");  
     })
  }


  function editar(){
    borrardom();
    var ide= document.getElementById('id').value;
    if(ide == ''){
    alert('NO EXISTE EL REGISTRO');
  }
    else{
    var cli= document.getElementById('cliente');    
    var fec = document.getElementById('fecha'); 
    var val = document.getElementById('valor');   
    elementIndex = ventas.findIndex(obj => obj.id == ide);
    ventas[elementIndex].cliente = cli;     
    ventas[elementIndex].fecha = fec;
    ventas[elementIndex].valor = val;       
    alert('ACCESO ACTUALIZADO')
    limpiar();
  }
  }

  function ver(){
    borrardom();
    total();        
    var listaAccesos = document.getElementById('tabla');
    let tablaContent = ``
    for (const item of ventas) {
 
     tablaContent += `
    <tr>
     <td>${item.id}</td>
     <td>${item.cliente}</td>
     <td>${item.fecha}</td>
     <td>${item.valor}</td>
    </td>  
    `
  }
  listaAccesos.innerHTML += tablaContent
   }

   function total(){   
   
    let total = ventas.reduce((sum, v) => sum + v.valor, 0);
    document.getElementById('tot').value = total;
    
   
  }
  

 


  
  
