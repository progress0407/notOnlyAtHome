// 재료
class UserStorage {
    loginUser(id, passwd, onSuccess, onError) {
        setTimeout( () => {
                if(
                    (id === 'ellie' && passwd === 'dream') ||
                    (id === 'coder' && passwd === 'academy')
                ){ 
                    onSuccess(id);
                } else {
                    onError(new Error('not Found'));
                }
            }, 1200);
    }
    getRoles(user, onSuccess, onError){
        setTimeout( ()=> {
            if(user === 'ellie'){
                onSuccess({name:'ellie', role:'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 만들기..
var id = prompt('enter your id');
var passwd = prompt('and your password, also');

var userSto = new UserStorage();
userSto.loginUser(id, passwd,
    (id)=>{
        userSto.getRoles(id, ()=>console.log());
    },
    ()=>{
        console.log();
    }
); 

// 정답

const userStorage = new UserStorage();
const id = prompt('enter your id');
const passwd = prompt('and your password, also');

userStorage.loginUser(
    id, 
    passwd,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
); 