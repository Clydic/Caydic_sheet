<template>
    <div>
        <p>Attaque contact : {{attaqueCac}}</p>
        <p>Attaque dist : {{attaqueDist}}</p>
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
var list_of_carac = require( "../assets/js/list_of_carac.js");
var id_js = 0
export default {
    data(){
        return {
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
    computed: {
        attaqueCac(){
            let bba = list_of_carac.bba.valeur.split("/");
            for(let i =0; i<bba.length ; i++){
              bba[i] = parseInt(bba[i]) + parseInt(this.modif(list_of_carac.for));
              bba[i] = "+" + bba[i];
            }
            return bba.join("/");
        },
        attaqueDist(){
            let bba = list_of_carac.bba.valeur.split("/");
            for(let i =0; i<bba.length ; i++){
              bba[i] = parseInt(bba[i]) + parseInt(this.modif(list_of_carac.dex));
              bba[i] = "+" + bba[i];
            }
            return bba.join("/");
        }
    },
}
</script>
<style>
</style>