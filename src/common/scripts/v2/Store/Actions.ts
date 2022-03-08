import Store from './Store';
import { authAPI } from '../../api/AuthAPI';
import Router from '../Router';
import { userAPI } from '../../api/UserAPI';
import { chatsAPI } from '../../api/ChatsAPI';
import renderDOM from '../utils/renderDOM';
import Popup from '../../../../components/popup/popup';
import Input from '../../../../components/input/input';
import Button from '../../../../components/button/button';
import isEqual from '../utils/isEqual';

const store = new Store();
const router = new Router('#app');

const signIn = (data: any) => {
    if(window.location.pathname !== '/') return
    authAPI.signIn(data)?.then((response: any) => {
        // eslint-disable-next-line no-console
        console.log(response);
        if (response.status === 200) {
            authAPI.getUserInfo()?.then((response: any) => {
                // eslint-disable-next-line no-console
                console.log('Кладем в стор', JSON.parse(response.response));
                store.set('user', JSON.parse(response.response));
                chatsAPI.getChat()?.then((response: any) => {
                    console.log('Кладем в стор чаты', JSON.parse(response.response));
                    store.set('chats', JSON.parse(response.response));
                    router.go('/messenger');
                })
            })
        } else {
            // eslint-disable-next-line no-console
            console.log(JSON.parse(response.response).reason)
        }
    })
}

const changeProfile = (data: any) => {
    if(window.location.pathname !== '/settings/edit-profile') return
    console.log('input', data)
    userAPI.changeProfile(data)?.then((response: any) => {
        // eslint-disable-next-line no-console
        console.log('Кладем в стор', JSON.parse(response.response));
        store.set('user', JSON.parse(response.response));
        router.go('/settings')
    }).catch((error) => {
        console.log(error)
    });
}

const changePassword = (data: any) => {
    if(window.location.pathname !== '/settings/edit-password') return
    userAPI.changePassword(data)?.then(() => {
        //store.set('user', {...store.getState()['user'], password: data.newPassword});
        router.go('/settings')
    }).catch((error) => {
        console.log(error)
    });
}

const signUp = (data: any) => {
    if(window.location.pathname !== '/sign-up') return
    authAPI.signUp(data)?.then((response) => {
        // eslint-disable-next-line no-console
        console.log(response); // id
        authAPI.getUserInfo()?.then((response: any) => {
            // eslint-disable-next-line no-console
            console.log(response); // user: {}
            if (response.status === 200) {
                authAPI.getUserInfo()?.then((response: any) => {
                    // eslint-disable-next-line no-console
                    console.log(response); // user
                    store.set('user', JSON.parse(response.response));
                    router.go('/settings');
                })
            } else {
                // eslint-disable-next-line no-console
                console.log(JSON.parse(response.response).reason)
            }
        })
    })
}

const logout = () => {
    authAPI.getUserInfo()?.then((response: any) => {
        if (response.status === 200) {
            authAPI.logout()?.then((response) => {
                // eslint-disable-next-line no-console
                if(store.getState()['selectChat'] && store.getState()['selectChat'].socket) {  // закрываем сокет
                    if(store.getState()['selectChat'].socket.readyState) {
                        console.log('CLOSE SOCKET');
                        store.getState()['selectChat'].socket.close();
                    }
                }
                store.removeState();
                console.log(response);
            })
        }
    })
}

const changeAvatar = (data: FormData) => {
    userAPI.changeAvatar(data)?.then((response: any) => {
        store.set('user', {...store.getState()['user'], avatar: JSON.parse(response.response).avatar});
        // console.log(JSON.parse(response.response).avatar);
        // console.log(store.getState()['user']);
    })
}

const createChat = (data: any) => {
    chatsAPI.createChat(data)?.then((response: any) => {
        chatsAPI.getChat()?.then((response: any) => {
            console.log('Обновляем чаты', JSON.parse(response.response));
            store.set('chats', JSON.parse(response.response));
        })
        console.log(response)
    })
}



const addUserChat = () => {
    renderDOM('#app', new Popup('div', {
        className: 'popup',
        title: 'Добавить пользователя',
        id: 'pop10',
        content: new Input(
            'div',
            {
                inputList: [
                    {
                        name: 'login',
                        text: 'Логин пользователя'
                    },
            
                ],
            }
        ),
        btn: new Button('div', {
            btnName: 'Добавить'
        }),
        events: {
            submit: (e: any) => {
                e.preventDefault()
                const form = document.getElementById('pop10');
                const input = form?.querySelector('input');
                console.log('Добавляем', input.value)
                userAPI.searchByLogin({login: input.value})?.then((response: any) => {
                    if(JSON.parse(response.response)[0]) {
                        const userId = JSON.parse(response.response)[0].id;
                        chatsAPI.addUser({users: [userId], chatId: store.getState()['selectChat'].id})?.then((response: any) => {
                            console.log(response.response);
                        })
                        document.querySelector('.popup')?.remove()
                    } else {
                        console.log('Не найден');
                        return
                    }
                })
                // Actions.createChat({title: input?.value})
            }
        }
    }))
}

const removeUserChat = () => {
    renderDOM('#app', new Popup('div', {
        className: 'popup',
        title: 'Удалить пользователя',
        id: 'pop10',
        content: new Input(
            'div',
            {
                inputList: [
                    {
                        name: 'login',
                        text: 'Логин пользователя'
                    },
            
                ],
            }
        ),
        btn: new Button('div', {
            btnName: 'Удалить'
        }),
        events: {
            submit: (e: any) => {
                e.preventDefault()
                const form = document.getElementById('pop10');
                const input = form?.querySelector('input');
                console.log('Удаляем', input.value)
                userAPI.searchByLogin({login: input.value})?.then((response: any) => {
                    if(JSON.parse(response.response)[0]) {
                        const userId = JSON.parse(response.response)[0].id;
                        chatsAPI.deleteUser({users: [userId], chatId: store.getState()['selectChat'].id})?.then((response: any) => {
                            console.log(response.response);
                        })
                        document.querySelector('.popup')?.remove()
                    } else {
                        console.log('Не найден');
                        return
                    }
                })
                // Actions.createChat({title: input?.value})
            }
        }
    }))
}

const deleteChat = () => {
    console.log('Удаляем чат')
    chatsAPI.deleteChat({chatId: store.getState()['selectChat'].id})?.then((response: any) => {
        console.log(response.response);
        store.set('selectChat', {});
        chatsAPI.getChat()?.then((response: any) => {
            console.log('Обновляем чаты', JSON.parse(response.response));
            store.set('chats', JSON.parse(response.response));
        })
        router.go('/messenger');
    })
}

const updateChats = () => {
    const interval = setInterval(() => {
        if(store.getState()['user']) {
            chatsAPI.getChat()?.then((response: any) => {
                if(isEqual(store.getState()['chats'], JSON.parse(response.response))) {
                    console.log('Обновляем чаты', JSON.parse(response.response));
                    store.set('chats', JSON.parse(response.response));
                }
            })
        } else {
            clearInterval(interval);
        }
    }, 5000)
}


const takeHistory = (socket: any) => {
    if(!socket.readyState){
        setTimeout(() => {
            takeHistory(socket);
        },100);
    }else{
        socket.send(JSON.stringify({content: '0', type: 'get old',}));
        chatsAPI.getChat()?.then((response: any) => {
            console.log('Обновляем чаты', JSON.parse(response.response));
            store.set('chats', JSON.parse(response.response));
        })
    }
}

const startDialog = () => {
    console.log('start dialog');
    const userId = store.getState()['user'].id;
    const chatId = store.getState()['selectChat'].id;
    const token = store.getState()['selectChat'].token;
    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
    store.set('selectChat', {...store.getState()['selectChat'], socket: socket})
    // получить старые сообщения
    // socket.send(JSON.stringify({content: '0', type: 'get old',})); 
    store.set('dialog', [])
    takeHistory(socket);
    pingWS();
    

    socket.addEventListener('open', () => {
        console.log('Соединение установлено');
    });
      
    socket.addEventListener('close', event => {
        if (event.wasClean) {
            console.log('Соединение закрыто чисто');
        } else {
            console.log('Обрыв соединения');
        }
    
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });
    
    socket.addEventListener('message', event => {
        console.log('Получены данные', event.data);
        let msgClass = '';
        const result: any = [];
        let data = JSON.parse(event.data);
        if(!Array.isArray(data)) {
            data = [data]
        }
        const user_id = store.getState()['user'].id;
        data.forEach((msg: any) => {
            if(msg.type !== 'user connected' && msg.type !== 'pong') {
                if(user_id === msg.user_id) {
                    result.unshift({msgText: msg.content, msgClass: 'message_my-message'}); 
                } else {
                    result.unshift({msgText: msg.content, msgClass: 'message_friend-message'}); 
                }
            }
        })
        store.getState()['dialog'] = store.getState()['dialog'].concat(result);
        store.emit(Store.EVENT_UPDATE);
    });

    socket.addEventListener('error', event => {
        console.log('Ошибка', event.message);
    }); 
}

const connectChat = (id: any) => {
    // console.log(store.getState()['selectChat'].id, id)
    if(store.getState()['selectChat'] && store.getState()['selectChat'].socket) {  // закрываем сокет
        if(store.getState()['selectChat'].socket.readyState) {
            console.log('CLOSE SOCKET');
            store.getState()['selectChat'].socket.close();
        }
        store.set('selectChat', {});
        // if(store.getState()['selectChat'].id.toString() === id) return
    }

    let result = {};
    chatsAPI.getToken(id)?.then((response: any) => {
        console.log(JSON.parse(response.response));
        store.set('selectChat', {token: JSON.parse(response.response).token, ...result});
        console.log('запускаем новый сокет')
        startDialog();
        router.go('/messenger/chat');
    });
    store.getState()['chats'].forEach((chat: any) => {
        if(chat.id && chat.id.toString() === id) {
            result = {id: chat.id, avatar: chat.avatar, title: chat.title};
        }
    })
}

const sendMessage = (msg: string) => {
    const socket = store.getState()['selectChat'].socket;
    socket.send(JSON.stringify({
        content: msg,
        type: 'message',
    }));
    // updateChats();
}

const pingWS = () => {
    const socket = store.getState()['selectChat'].socket;
    const interval = setInterval(() => {
        if(store.getState()['selectChat'] && store.getState()['selectChat'].socket.readyState !== 3) {
            if(store.getState()['selectChat'].socket === socket) {
                store.getState()['selectChat'].socket.send(JSON.stringify({
                    content: '',
                    type: 'ping',
                }));
            }
        } else {
            clearInterval(interval);
        }
    }, 50000)
}

export { signIn, changeProfile, signUp, logout, changePassword, changeAvatar, createChat, connectChat, addUserChat, removeUserChat, deleteChat, updateChats, startDialog, sendMessage, pingWS }