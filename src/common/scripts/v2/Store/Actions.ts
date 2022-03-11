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
    const errorTextLabel: any = document.querySelector('.error-form');
    errorTextLabel?.classList.remove('invalid');
    if(window.location.pathname !== '/') return
    authAPI.signIn(data)?.then((response: any) => {
        if (response.status === 200) {
            authAPI.getUserInfo()?.then((response: any) => {
                store.set('user', JSON.parse(response.response));
                chatsAPI.getChat()?.then((response: any) => {
                    store.set('chats', JSON.parse(response.response));
                    router.go('/messenger');
                })
            })
        } else {
            errorTextLabel.textContent = JSON.parse(response.response).reason;
            errorTextLabel?.classList.add('invalid');
        }
    })
}

const changeProfile = (data: any) => {
    if(window.location.pathname !== '/settings/edit-profile') return
    const errorTextLabel: any = document.querySelector('.error-form');
    errorTextLabel?.classList.remove('invalid');
    userAPI.changeProfile(data)?.then((response: any) => {
        if(response.status === 200) {
            store.set('user', JSON.parse(response.response));
            router.go('/settings')
        } else {
            errorTextLabel.textContent = JSON.parse(response.response).reason;
            errorTextLabel?.classList.add('invalid');
        }
    })
}

const changePassword = (data: any) => {
    if(window.location.pathname !== '/settings/edit-password') return
    const errorTextLabel: any = document.querySelector('.error-form');
    errorTextLabel?.classList.remove('invalid');
    userAPI.changePassword(data)?.then((response: any) => {
        if(response.status === 200) {
            router.go('/settings')
        } else {
            errorTextLabel.textContent = JSON.parse(response.response).reason;
            errorTextLabel?.classList.add('invalid');
        }
    })
}

const signUp = (data: any) => {
    if(window.location.pathname !== '/sign-up') return
    const errorTextLabel: any = document.querySelector('.error-form');
    errorTextLabel?.classList.remove('invalid');
    authAPI.signUp(data)?.then((response: any) => {
        if (response.status === 200) {
            authAPI.getUserInfo()?.then((response: any) => {
                if (response.status === 200) {
                    authAPI.getUserInfo()?.then((response: any) => {
                        store.set('user', JSON.parse(response.response));
                        router.go('/settings');
                    })
                } else {
                    errorTextLabel.textContent = JSON.parse(response.response).reason;
                    errorTextLabel?.classList.add('invalid');
                }
            })
        } else {
            errorTextLabel.textContent = JSON.parse(response.response).reason;
            errorTextLabel?.classList.add('invalid');
        }
    })
}

const logout = () => {
    authAPI.getUserInfo()?.then((response: any) => {
        if (response.status === 200) {
            authAPI.logout()?.then(() => {
                if(store.getState()['selectChat'] && store.getState()['selectChat'].socket) {  // закрываем сокет
                    if(store.getState()['selectChat'].socket.readyState) {
                        store.getState()['selectChat'].socket.close();
                    }
                }
                store.removeState();
            })
        }
    })
}

const changeAvatar = (data: FormData) => {
    const errorTextLabel: any = document.querySelector('.error-form');
    errorTextLabel?.classList.remove('invalid');
    userAPI.changeAvatar(data)?.then((response: any) => {
        if(response.status === 200) {
            store.set('user', {...store.getState()['user'], avatar: JSON.parse(response.response).avatar});
        } else {
            errorTextLabel.textContent = JSON.parse(response.response).reason;
            errorTextLabel?.classList.add('invalid');
        }
    })
}

const createChat = (data: any) => {
    const errorTextLabel: any = document.querySelector('.error-form');
    errorTextLabel?.classList.remove('invalid');
    chatsAPI.createChat(data)?.then((response: any) => {
        if(response.status === 200) {
            chatsAPI.getChat()?.then((response: any) => {
                store.set('chats', JSON.parse(response.response));
            })
        } else {
            errorTextLabel.textContent = JSON.parse(response.response).reason;
            errorTextLabel?.classList.add('invalid');
        }
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
                const errorTextLabel: any = document.querySelector('.error-form');
                errorTextLabel?.classList.remove('invalid');
                const form = document.getElementById('pop10');
                const input: any = form?.querySelector('input');
                userAPI.searchByLogin({login: input.value})?.then((response: any) => {
                    if(JSON.parse(response.response)[0]) {
                        const userId = JSON.parse(response.response)[0].id;
                        chatsAPI.addUser({users: [userId], chatId: store.getState()['selectChat'].id})
                        document.querySelector('.popup')?.remove()
                    } else {
                        errorTextLabel.textContent = 'Не найден';
                        errorTextLabel?.classList.add('invalid');
                        return
                    }
                })
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
                const errorTextLabel: any = document.querySelector('.error-form');
                errorTextLabel?.classList.remove('invalid');
                const form = document.getElementById('pop10');
                const input: any = form?.querySelector('input');
                userAPI.searchByLogin({login: input.value})?.then((response: any) => {
                    if(JSON.parse(response.response)[0]) {
                        const userId = JSON.parse(response.response)[0].id;
                        chatsAPI.deleteUser({users: [userId], chatId: store.getState()['selectChat'].id})
                        document.querySelector('.popup')?.remove()
                    } else {
                        errorTextLabel.textContent = 'Не найден';
                        errorTextLabel?.classList.add('invalid');
                        return
                    }
                })
            }
        }
    }))
}

const deleteChat = () => {
    chatsAPI.deleteChat({chatId: store.getState()['selectChat'].id})?.then(() => {
        store.set('selectChat', {});
        chatsAPI.getChat()?.then((response: any) => {
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
            store.set('chats', JSON.parse(response.response));
        })
    }
}

const startDialog = () => {
    const userId = store.getState()['user'].id;
    const chatId = store.getState()['selectChat'].id;
    const token = store.getState()['selectChat'].token;
    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
    store.set('selectChat', {...store.getState()['selectChat'], socket: socket})
    store.set('dialog', [])
    takeHistory(socket);
    pingWS();
    

    socket.addEventListener('open', () => {
        // eslint-disable-next-line no-console
        console.log('Соединение установлено');
    });
      
    socket.addEventListener('close', event => {
        if (event.wasClean) {
            // eslint-disable-next-line no-console
            console.log('Соединение закрыто чисто');
        } else {
            // eslint-disable-next-line no-console
            console.log('Обрыв соединения');
        }
        // eslint-disable-next-line no-console
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });
    
    socket.addEventListener('message', event => {
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

    socket.addEventListener('error', (event: any) => {
        // eslint-disable-next-line no-console
        console.log('Ошибка', event.message);
    }); 
}

const connectChat = (id: any) => {
    if(store.getState()['selectChat'] && store.getState()['selectChat'].socket) {  
        if(store.getState()['selectChat'].socket.readyState) {
            store.getState()['selectChat'].socket.close();
        }
        store.set('selectChat', {});
    }

    let result = {};
    chatsAPI.getToken(id)?.then((response: any) => {
        store.set('selectChat', {token: JSON.parse(response.response).token, ...result});
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