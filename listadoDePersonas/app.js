const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Perez')
];

function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += '<li> '+persona.nombre+" "+persona._apellido+'</li>';
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value !=  '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log('no hay informacion q agregar');
    }
    
}
