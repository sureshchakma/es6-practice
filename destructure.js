const person ={Name: "Suresh Chakma", age: 25, job:"Software Engineer", WifeName:"Boishakhi Chakma", address: "Rangamati",  phone: 01517832223, friends:['Rimon Chakma', 'Hridoy Khisa', 'Alak Chakma']};

const { phone, WifeName, address } =person;
// const WifeName =person.WifeName;
// const phone =person.phone;
// const address = person.address;

// console.log(WifeName, address, phone);  
// console.log(WifeName, address, phone);

// const friends = ['Ajoy Devgon', 'Hridoy Khan', 'Riyaj Bhai', 'Sahrukh Khan', 'Aamir Khan', 'Arbaz Khan', 'Soail Khan'];

// const [chigonFriend, nextFriend, ...restFriends]= friends;
// console.log(chigonFriend, nextFriend, restFriends);

const complexObject ={
    name: 'abc';
    info:{
        address: 'Kola Bagan';
        leader: 'Tiger leader';
    }
}

const {leader} =complexObject.info;