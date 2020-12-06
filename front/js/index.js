window.onload=function(){
    //variables 
               
    var marca_seleccionada = "Nissan";
     var lista_autos = [];
    //funciones 
    const cargar_aplicacion = () => {
        lista_autos = [];
        // ajax 
        fetch('http://localhost:3000/api/data/list')
        .then(res => res.json())
        .then(data =>{
            for (let i = 0; i < data.length; i++) {
           if (data[i].marca == marca_seleccionada) {
               lista_autos.push(data[i]);
           }                
        }
        desplegar_info()
        }); 
       
    }    

    const desplegar_info = () => {
        //-------------------------
        let foto = document.querySelector('#foto');
        foto.src = 'img/'+lista_autos[0].foto
        let modelo = document.querySelector('.modelo');
        modelo.innerHTML = lista_autos[0].modelo;
        let color = document.querySelector('.color');
        color.innerHTML = lista_autos[0].color;
        let precio = document.querySelector('.precio');
        precio.innerHTML = lista_autos[0].precio
        let cilindrada = document.querySelector('.cilindrada');
        cilindrada.innerHTML = lista_autos[0].cilindrada;
        //--------------------------------------------
        let foto2 = document.querySelector('#foto2');
        foto2.src = 'img/'+lista_autos[1].foto
        let modelo2 = document.querySelector('.modelo2');
        modelo2.innerHTML = lista_autos[1].modelo;
        let color2 = document.querySelector('.color2');
        color2.innerHTML = lista_autos[1].color;
        let precio2 = document.querySelector('.precio2');
        precio2.innerHTML = lista_autos[1].precio
        let cilindrada2 = document.querySelector('.cilindrada2');
        cilindrada2.innerHTML = lista_autos[1].cilindrada;
        //--------------------------------------------
        let foto3 = document.querySelector('#foto3');
        foto3.src = 'img/'+lista_autos[2].foto
        let modelo3 = document.querySelector('.modelo3');
        modelo3.innerHTML = lista_autos[2].modelo;
        let color3 = document.querySelector('.color3');
        color3.innerHTML = lista_autos[2].color;
        let precio3 = document.querySelector('.precio3');
        precio3.innerHTML = lista_autos[2].precio
        let cilindrada3 = document.querySelector('.cilindrada3');
        cilindrada3.innerHTML = lista_autos[2].cilindrada;
        //--------------------------------------------
    }

    var boton1 = document.getElementById('marca1');
    boton1.addEventListener('click', function(){
        boton2.style.backgroundColor = "#cfcfcf";
        boton3.style.backgroundColor = "#cfcfcf";
        boton1.style.backgroundColor = "#fff";
        marca_seleccionada = "Honda";
        cargar_aplicacion();
    });
    var boton2 = document.getElementById('marca2');
    boton2.addEventListener('click', function(){
        boton1.style.backgroundColor = "#cfcfcf";
        boton3.style.backgroundColor = "#cfcfcf";
        boton2.style.backgroundColor = "#fff";
        marca_seleccionada = "Nissan";
        cargar_aplicacion();
     
    });

    var boton3 = document.getElementById('marca3');
    boton3.addEventListener('click', function(){
        boton3.style.backgroundColor = "#fff";
        boton2.style.backgroundColor = "#cfcfcf";
        boton1.style.backgroundColor = "#cfcfcf";
        marca_seleccionada = "Aston";
        cargar_aplicacion();
    });
           
    cargar_aplicacion();
        
    };