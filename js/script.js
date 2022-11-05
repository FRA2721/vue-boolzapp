// dev: Francesco Cimino;
// proj: Boolzapp;
// lang: js;

const {createApp} = Vue;
createApp({
    data(){
        return{
            dataForUsers: [
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
                    ],
                }
            ],
            currentChat: 0,
        }
    }
}).mount("#root");