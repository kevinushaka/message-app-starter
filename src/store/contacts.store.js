
import Axios from 'axios';

export const  contactsModule ={
    namespace:false,
    state(){
        return{
            contacts:[],
        }
    },

    mutations:{
        setContact: (state,payload) => state.contacts=payload,
    },
    actions:{
        async setContact(context){
            try{
                    const response =await Axios.get("https://io-labs.fr/messenger/contacts.json");
                   // console.log(response.data)
                    context.commit('setContact',response.data);
            }catch(error){
                console.log(error);
            }
        }
    }
}