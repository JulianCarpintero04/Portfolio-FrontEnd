interface IPersona{
    nombre:string;
    edad:number;
    direccion:IDireccion;
    mostrarDireccion: ()=> string;
}

interface IDireccion{
    calle:string;
    ciudad:string;
    pais:string;
}

    const persona: IPersona ={
        nombre:'Jose',
        edad:30,
        direccion: {
        calle:'Las Heras',
        ciudad:'General Roca',
        pais:'Argentina'
    },
    mostrarDireccion(){
        return this.nombre+','+this.direccion.ciudad+','+this.direccion.pais;
    }
    };
console.log(persona.mostrarDireccion())