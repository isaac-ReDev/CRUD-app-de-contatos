// consts
const $btnCreteNewContato = document.querySelector('#btn-create-new-contato');
const $contatos           = document.querySelector(".ul-friends-list")
const $popupCreate        = document.querySelector("#popup-create-contato");
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
        userId:44,
        userNumber:9999,
        userEmail:'rebecaAlves.com',
        userGroups:'family',
    },
    {
        userName:'rebeca ',
        userId:44,
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
$contatos.addEventListener('click', (evetn) =>{
    const eventTarget = evetn.target;
    const classOfevent = eventTarget.className === "li-friend-item";
    const img = eventTarget.className === "img-contato";
    const name = eventTarget.className === "contato-name";
    // if(eventTarget.tagName === "LI" || eventTarget.tagName === "P" || eventTarget.tagName === "IMG" ){
    //     console.log(eventTarget)
    // }else{
    //     console.log("isso nao 'e uma li")
    // }
    if(classOfevent || img || name){
        console.log("Opa")
        console.log(eventTarget.parentNode[0]  )
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
//function ReadContato()

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
            <li class="li-friend-item" data-js="">
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