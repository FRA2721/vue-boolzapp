// dev: Francesco Cimino;
// proj: Boolzapp;
// lang: js;

const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Jonny',
                    avatar: '_1',
                    visible: true,
                    messages: [

                        {
                            date: '10/01/2022 13:33:33',
                            message: 'Hi mate... How are you?',
                            status: 'sent'
                        },

                        {
                            date: '10/03/2022 12:22:22',
                            message: 'Remenber to buy: milk and coffe',
                            status: 'sent'
                        },

                        {
                            date: '10/04/2022 11:11:11',
                            message: 'Good job!!!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Jeff',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '15/05/2019 07:16:00',
                            message: 'Good morning!',
                            status: 'sent'
                        },

                        {
                            date: '15/06/2018 16:30:30',
                            message: 'I am good...',
                            status: 'received'
                        },

                        {
                            date: '25/07/2020 17:35:00',
                            message: 'Do you want to came with us?',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Samuel',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '23/011/2018 16:10:43',
                            message: 'No thank you.',
                            status: 'received'
                        },

                        {
                            date: '23/01/2020 14:20:15',
                            message: 'Have you ever been in London?',
                            status: 'sent'
                        },

                        {
                            date: '23/03/2017 12:11:52',
                            message: 'I am so sorry mate!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Alexander',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '16/09/2019 15:15:55',
                            message: 'I am studing...',
                            status: 'sent'
                        },

                        {
                            date: '10/12/2020 15:50:00',
                            message: 'I am busy!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Dom',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '16/08/2020 15:30:55',
                            message: 'I do not want to go there.',
                            status: 'sent'
                        },

                        {
                            date: '13/04/2020 15:50:00',
                            message: 'Would you like some pizza?',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Jennifer',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '12/08/2020 15:30:55',
                            message: 'Hello!!!',
                            status: 'sent'
                        },

                        {
                            date: '15/08/2020 15:50:00',
                            message: 'Well done!',
                            status: 'received'
                        },

                        {
                            date: '22/01/2021 15:51:00',
                            message: 'I like to play the guitar',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Jack',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '27/04/2020 15:34:45',
                            message: 'How old are you?',
                            status: 'sent'
                        },

                        {
                            date: '16/01/2020 18:26:00',
                            message: 'Thank you',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'David',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '03/01/2020 06:30:55',
                            message: 'Not yet...',
                            status: 'received'
                        },

                        {
                            date: '03/01/2020 07:50:00',
                            message: 'I am your friend...',
                            status: 'sent'
                        },

                        {
                            date: '03/01/2020 08:59:00',
                            message: 'OK!',
                            status: 'received'
                        }
                    ]
                }
            ],
            botMessage: [
                "Hi mate... nice to se you",
                "How are you?",
                "Good job...",
                "Try it",
                "Bye",
                "Hellooooooo",

            ],
            currentChat: 0,
            activeContactBot: 0,
            userMessage: "",
            chatStringFilter: "",
            contactNotFound: false,
            openPopup: false,
            wrongData: false,
            newContact: {
                name: '',
                avatar: '',
                state: 'Last access: 12:00',
                visible: true,
                messages: []
            },
            darkTheme: true,
            root: null,
        }
    },

    methods: {
        newUserMessage(){
            this.activeContactBot = this.currentChat;
            if(this.contacts.length > 0 && this.userMessage.length > 0){    
                const newMessage = {
                    date: this.dataTimeGenerator(),
                    message: this.userMessage,
                    status: 'sent'
                };
                this.contacts[this.activeContactBot].messages.push(newMessage);
                this.userMessage = "";
                this.$nextTick(() => {
                    this.endScrolling();

                });
                this.newBotMessage();
            }
        },

        newBotMessage(){
            const rndMessage = this.botMessage[this.getRndNum(0,this.botMessage.length - 1)];
            const botMessage = {

                date: this.dataTimeGenerator(),
                message: rndMessage,
                status: 'received'
            };

            setTimeout(() => {
                this.contacts[this.activeContactBot].state = "Is tipyng...";

                setTimeout(() => {
                    this.contacts[this.activeContactBot].messages.push(botMessage);
                    this.$nextTick(() => {
                        this.endScrolling();
                    });
                    this.contacts[this.activeContactBot].state = "Online";

                    setTimeout(() => {
                        nowDate = dt.now().setLocale("it").toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
                        this.contacts[this.activeContactBot].state = `Last access: ${nowDate.substring(11,17)}`;
                    }, 3000);

                }, 3000);

            }, 1000);

        },

        deleteMessage(index){
            this.contacts[this.currentChat].messages.splice(index, 1);
        },

        getRndNum(min,max){
            let rndNum =  Math.floor(Math.random() * (max - min + 1) ) + min;
            return rndNum;
        },

        deleteAllMessage(){
            if(this.contacts.length > 0){
                if(this.contacts[this.currentChat].messages.length > 0){
                    for(let i = this.contacts[this.currentChat].messages.length; i >= 0; i--){
                        this.deleteMessage(i);
                    }
                }
            }
        },

        deleteChat(){
            if(this.currentChat === this.contacts.length - 1 && this.currentChat !== 0){
                this.contacts.splice(this.currentChat, 1);
                this.currentChat = this.contacts.length - 1;

            } else{
                this.contacts.splice(this.currentChat, 1);
            }
        },

        newChat(){
            this.wrongData = false;

            if(this.newContact.name.length > 0 && this.newContact.avatar.length > 0){
                this.contacts.push({...this.newContact});
                this.openPopup = false;
                this.$nextTick(() => {
                    this.endSidebar();
                });
                this.currentChat = this.contacts.length - 1;

            } else {
                this.wrongData = true;
            }

            this.newContact.name = "";            
            this.newContact.avatar = "";
            this.newContact.messages = [];
        },

        closePopupAdd(){
            this.openPopup = false;
            this.newContact.name = "";            
            this.newContact.avatar = "";
            this.newContact.messages = [];
        },

        endScrolling(){
            const container = document.querySelector('.main-chat');
            const scrollHeight = container.scrollHeight;
            container.scrollTop = scrollHeight;
        },

        endSidebar(){
            const container = document.querySelector('.main-sidebar-structure');
            const scrollHeight = container.scrollHeight;
            container.scrollTop = scrollHeight;
        },

        dataTimeGenerator(){
            return dt.now().setLocale("it").toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
        },

        chatFilter(){
            this.contactNotFound = false;

            let count = 0;
            const userSearch = this.chatStringFilter.toLowerCase();

            for (let i = 0; i < this.contacts.length; i++) {
                const thisContact = this.contacts[i].name.toLowerCase();
                
                if (thisContact.substring(0,userSearch.length) !== userSearch) {
                    this.contacts[i].visible = false;
                    count++;

                } else{
                    this.contacts[i].visible = true;
                }

                if(count === this.contacts.length){
                    this.contactNotFound = true;
                }
            }
        },
        switchMode(){
            this.darkTheme = !this.darkTheme;
            this.root = document.documentElement;
            if(!this.darkTheme){
                // light-mode
                this.root.style.setProperty("--ms_bg-app", "linear-gradient(180deg, #009688 18.8%, #D8DBD6 18.8%)");
                this.root.style.setProperty("--background-chat", "url(../img/mine.jpg)");
                this.root.style.setProperty("--ms-black", "#000");
                this.root.style.setProperty("--ms-white", "#ffffff");
                this.root.style.setProperty("--ms_bg-white", "#ffffff");
                this.root.style.setProperty("--ms_bg-light-grey", "#eaeaea");
            } else{
                // dark-mode
                this.root.style.setProperty("--ms_bg-app", "linear-gradient(180deg, #009688 18.8%, #000000e8 18.8%)");
                this.root.style.setProperty("--background-chat", "url(../img/mine.jpg)");
                this.root.style.setProperty("--ms-black", "#ffffff");
                this.root.style.setProperty("--ms-white", "#000");
                this.root.style.setProperty("--ms_bg-white", "#000");
                this.root.style.setProperty("--ms_bg-light-grey", "#252525");
            }
        }
    },
    mounted(){
        this.switchMode();
    }
}).mount("#root");