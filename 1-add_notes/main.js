new Vue({
    el:'#app',
    data:{
        title:'Notes In Vue',
        note : {
            title:'',
            body:'',
            date: new Date(Date.now()).toLocaleString(),
        } ,
        allNotes :[],
    },
    methods:{
        addNote(){
            
            let {title,body} = this.note
            let date = new Date(Date.now()).toLocaleString();
            this.allNotes.push({title,body,date});
            this.note.title='';
            this.note.body ='';
            this.note.date ='';
        },

        delNote(index)
        {
            this.allNotes.splice(index,1);
        }
    }
})
