const { createApp } = Vue

createApp({
    data() {
        return {
        main_color:'#ff7b00',
        activelink: 1,
        clicked_link: 1,
        rout: 1,
        typevalue:'',
        typestatuse: true,
        technology:['frontend developer' , 'vue.js developer ' , 'node.js developer as a backend' , 'mevn stack developer'],
        charindex:0,
        arrayindex: 0,
        typingspeed: 200,
        erasingspeed: 100,
        delay: 2000,
        toggle_style: false,
        theme: true,
        colors: [],
        age:  new Date().getFullYear() - 1999,
        skills:[],
        education:[],
        experince: [],
        projects: []
        }
    },
    methods:{
        change_active(e){
            // console.log(e.target.getAttribute('data-index'))
            // console.log(e.target.dataset.index)
            this.activelink = e.target.dataset.index
            this.clicked_link = e.target.dataset.index
            setTimeout(()=>{
                this.rout = e.target.dataset.index
            },400)
        },
        toggle_sidebar(e){
            this.$refs.sidebar.classList.toggle('toggle-sidebar')
            this.$refs.overlay.classList.toggle('display-none')
        },

        typetext(){
            if(this.charindex < this.technology[this.arrayindex].length){
                this.typevalue += this.technology[this.arrayindex].charAt(this.charindex)
                this.charindex += 1
                setTimeout(this.typetext,this.typingspeed)
            }
            else{
                setTimeout(this.erasetext,this.delay)
            }
        },
        erasetext(){
            if(this.charindex > 0){
                this.typevalue = this.technology[this.arrayindex].substring(0,this.charindex-1)
                this.charindex -= 1
                setTimeout(this.erasetext,this.erasingspeed)
            }
            else{
                this.arrayindex += 1
                if(this.arrayindex >= this.technology.length){
                    this.arrayindex = 0
                }
                setTimeout(this.typetext,this.typingspeed + 1000)
            }
        },
        change_maincolor(e){
            // for(c of this.colors){
                // let color = c.dataset.color
                let color = e.target.dataset.color
                document.documentElement.style.setProperty('--main-color',color)
                localStorage.setItem('color_option',color);
                // console.log(color)
                // c.style.backgroundColor = color
            // }
        }
    },
    created(){
        setTimeout(this.typetext,this.delay + 200)

    },
    async mounted(){
        this.colors = document.querySelectorAll('#colors li')
        for(c of this.colors){
            let color = c.dataset.color
            c.style.backgroundColor = color
        }

        var localcolor = localStorage.getItem('color_option');

        //check if local storage is empty or not
        if(localcolor!==null){
            // store the local color to local storage
            document.documentElement.style.setProperty('--main-color',localcolor);
        }


        this.skills = await (await fetch("../json/skills.json")).json()
        this.education = await (await fetch("../json/education.json")).json()
        this.experince = await (await fetch("../json/experince.json")).json()
        this.projects = await (await fetch('../json/projects.json')).json()
        // fetch('http://localhost:3000/projects')
        // .then(res => res.json())
        // .then(data => (this.projects = data))
        // .catch(err => console.log(err))

    }
}).mount('#app')