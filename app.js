const app = Vue.createApp({
    data() {
        return {
          nombre: 'Rodrigo',
          apellido: 'Martinez',
          email: 'rodrigomartines@innovaccion.mx',
          genero: 'male',
          foto: 'https://randomuser.me/api/portraits/men/65.jpg',
          telefono: '011-962-7516',
          location: '9278 new road',
          edad: '26',
          password: 'poiuytrewertyu'
        }
    },
    methods: {
         async cambiarUsuario(){
         const res = await fetch('https://randomuser.me/api');
         const {results} = await res.json();
          this.nombre= results[0].name.first
          this.apellido= results[0].name.last
          this.email= results[0].email
          this.genero= results[0].gender
          this.foto= results[0].picture.large
          this.telefono= results[0].phone
          numeroS= results[0].location.street.number
          calleS= results[0].location.street.name
          this.location= numeroS+' '+calleS 
          this.edad= results[0].dob.age
          this.password= results[0].login.password          
        }
    }

})

app.mount('#app');