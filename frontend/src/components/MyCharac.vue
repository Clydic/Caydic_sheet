<template>
    <div>
        <h2>{{Name}}</h2>
        <h3>{{age}}</h3>
        <p>{{classe}}</p>
        <p>
            <button class="btn btn-primary" 
            type="button" data-bs-toggle="collapse" 
            data-bs-target="#mycarac" aria-expanded="false" 
            aria-controls="collapseExample">
                Caractéristique
            </button>
        </p>
        <div class="collapse" id="mycarac">
            <div class="card card-body w-50">
                <p v-for="carac in caracs" :key="carac"> 
                    {{carac.nom}}: {{carac.valeur}}({{modif(carac)}})
                </p>
            </div>
        </div>
            <p>
                <button class="btn btn-primary" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#mysave" aria-expanded="false" 
                aria-controls="collapseExample2">
                    Jets de sauvegarde
                 </button>
            </p>
            <div class="collapse" id="mysave">
                <div class="card card-body w-50">
                    <p v-for="sauvegarde in js" :key="sauvegarde.id"> 
                        {{sauvegarde.nom}}: {{sauvegarde.base + parseInt(modif(sauvegarde.carac))}}
                    </p>
                </div>
            </div>
        </div>
</template>
<script>
var id_js = 0
var list_of_carac = {
                for : {
               nom : "Force",
               valeur : 17,

                },
                dex : {
               nom : "Dextérité",
               valeur : 10,

                },
                con : {
               nom : "Constitution",
               valeur : 16,

                },
                sag : {
               nom : "Intelligence",
               valeur : 13,

                },
                int : {
               nom : "Charisme",
               valeur : 16,

                },
                cha : {
               nom : "Sagesse",
               valeur : 8,

                },
}
export default {
    data(){
        return {
            Name : "Caydic Croc-Blanc",
            age : "25 ans",
            classe : "Barbare",
            caracs : list_of_carac,
            js : [
                {
                    id : id_js++,
                    nom : "Réflexe",
                    base : 9,
                    carac : list_of_carac.dex,
                },
                {
                    id : id_js++,
                    nom : "Vigueur",
                    base : 9,
                    carac :list_of_carac.con
                },
                {
                    id : id_js++,
                    nom : "Volonté",
                    base : 9,
                    carac :list_of_carac.sag
                }
            ],
            myObject: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
        },
    }
    },
    methods: {
        modif(element){
            let res =Math.trunc((element.valeur-10)/2);
            if(res>=0){
               return "+" + res ;
            }
            else {
               return res ;
            }
        },

    },
}
</script>
<style>
</style>