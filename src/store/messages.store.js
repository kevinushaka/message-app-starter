
import Axios from 'axios';
import {messagesMock} from "../mocks/messages.mock.js";

export const messagesModule={
    namespace:false,

    state(){
        return{
            messages:messagesMock,
        }
    },

    mutations:{
        setMessage: (state,payload) => state.messages=payload,
    },

    getters:{
        numberOfUnreadMessages :(state)=>{
            return state.messages.filter(x=>x.read==true).length;
        },
        sortMessagesByDate: (state)=>{
            return state.messages.sort((a,b)=>{
                return new Date(b.date) - new Date(a.date);
              });

        }
    },
    actions:{
        async setMessage(context){
                try{
                        const response =await Axios.get("https://io-labs.fr/messenger/messages.json");
                        
                        context.commit('setMessage',response.data);
                }catch(error){
                    console.log(error);
                }
        }
    }
}