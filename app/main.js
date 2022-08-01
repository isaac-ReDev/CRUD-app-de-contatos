// consts
const $btnCreteNewContato = document.querySelector('#btn-create-new-contato');
const $contatos           = document.querySelector(".ul-friends-list")
const $popupCreate        = document.querySelector("#popup-create-contato");
const $popupShowContato   = document.querySelector(".pop-up-show-contato");
const $divPopuoShowContato= document.querySelector(".show-contato");

const $btnSaveContato     = document.querySelector("#btn-save-form-create-contato");
const $btnCancelContato   = document.querySelector("#btn-cancel-form-create-contato");
//* get value of the inputs from forms of the create new contato
const $nameNewContato      = document.querySelector("#form-name-new-contato");
const $phoneNewContato      = document.querySelector("#form-phone-new-contato");
const $emailNewContato      = document.querySelector("#form-email-new-contato");
const $groupsNewContato      = document.querySelector("#form-groups-new-contato");



// contatos database
const contatos = [
    {
        userName:'ReDEath',
        userId:1,
        userNumber:558899923232,
        userEmail:'ReDeath@deahnode.com',
        userGroups:'friends',
    },
    {
        userName:'Jojo',
        userId:2,
        userNumber:1555889977887,
        userEmail:'jojobizarre@deahnode.com',
        userGroups:'otakus',
    },
    {
        userName:'rebeca ',
        userId:3,
        userNumber:9999,
        userEmail:'rebecaAlves.com',
        userGroups:'family',
    },
    {
        userName:'rebeca ',
        userId:4,
        userNumber:9999,
        userEmail:'rebecaAlves.com',
        userGroups:'family',
    },
]

////////////////////*tesst
clearInputs()
BuildLiHTMLelement()
//clearInputs()

//* listener
//* chow popup with form for crate new contato
$btnCreteNewContato.addEventListener('click', () =>{
    clearInputs()
    $popupCreate.style.display = "flex"

});

//* button save new contato  in your list of cantatos
$btnSaveContato.addEventListener('click', (e)=>{
    //e.preventDefault()
    let newContato = createNewContato($nameNewContato.value,idOfContatos(),$phoneNewContato.value,$emailNewContato.value,$groupsNewContato.value);
    console.log(newContato)
    contatos.push(newContato)
    $popupCreate.style.display = "none"
    BuildLiHTMLelement();
    clearInputs()


})
//* button cancel the action of the create new contato
$btnCancelContato.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('you want discart this contato of the your list of friends')
})





//* listener show contato
$contatos.addEventListener('click', (event) =>{
    const eventTarget = event.target;
    const classOfevent = eventTarget.className === "li-friend-item";
    const img = eventTarget.className === "img-contato";
    const name = eventTarget.className === "contato-name";
    const dataId = eventTarget.getAttribute("data-js")
    const found = contatos.find(({userId}) => userId == dataId);

    // if(eventTarget.tagName === "LI" || eventTarget.tagName === "P" || eventTarget.tagName === "IMG" ){
    //     console.log(eventTarget)
    // }else{
    //     console.log("isso nao 'e uma li")
    // }
    if(classOfevent){
        setValueOfObject(found)
        ShowPopUp();

    }
    else if (img){
       // console.log(eventTarget.parentNode)
        const getParent = eventTarget.parentNode
        const dataId = getParent.getAttribute("data-js")
        console.log(dataId)
        const found2 = contatos.find(({userId}) => userId == dataId);

        setValueOfObject(found2)
        ShowPopUp();

    }
    else if(name){
        const getParent = eventTarget.parentNode
        const dataId = getParent.getAttribute("data-js")
        console.log(dataId)
        const found2 = contatos.find(({userId}) => userId == dataId);

        setValueOfObject(found2)
        ShowPopUp();

    }
})




//* CREATE
        //* this functions create e new contato e 
function createNewContato(contName,contId,contNumber,email,group){
    let newCont ;
    newCont = {userName:contName,userId:contId,userNumber:contNumber,userEmail:email,userGroups:group}
    return newCont
}



//* READ
const ReadContato = () =>{

}

//* UPDATE

//* DELETE


//* other functions
function idOfContatos(){
    let newId = contatos.length + 1;
    return newId;
}

//* create show contatos in the html page
function BuildLiHTMLelement(){
    //* base of structure fo the LI
        $contatos.innerHTML = '';

        for(let i=0;i< contatos.length;i++){
            $contatos.innerHTML +=  `
            <li class="li-friend-item" data-js="${contatos[i].userId}">
                <img class="img-contato" src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="">
                <p class="contato-name">${contatos[i].userName}</p>
            </li>
        `
        }
}

//* clear inputsa
function clearInputs(){
    $nameNewContato.value= '';
    $phoneNewContato.value = '';
    $emailNewContato.value = '';
    $groupsNewContato.value = '';
    $nameNewContato.innerHTML = '';
    $phoneNewContato.innerHTML = '';
    $emailNewContato.innerHTML = '';
    $groupsNewContato.innerHTML = '';
}

//* function show popups
const ShowPopUp = () =>{
    $popupShowContato.style.display = "flex"
}

//* function gat value of object and set in the show pop-up
const setValueOfObject = (obj)=>{
    
    $divPopuoShowContato.innerHTML = `
        <div class="show-contato-img">
         <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="" class="img-create-contato">
         </div>
             <p class="show-contato-name">${obj.userName}</p>
         <div class="show-contato-info">
            <small class="phone-type">Celular</small> <p class="show-contato-number">${obj.userNumber}</p>
        </div>
        <div class="show-contato-info">
            <small class="phone-type">Email</small> <p class="show-contato-number">${obj.userEmail}</p>
        </div>

        `

}

