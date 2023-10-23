

let element = document.getElementById('phoneNumber');
let maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
} 
let mask = new IMask(element, maskOptions);

let feedback = {
    name:"",
    surname:"",
    email:"",
    phone:"",
    message:""
};

document.getElementById('name').value = JSON.parse(localStorage.feedback)['name']
document.getElementById('surname').value = JSON.parse(localStorage.feedback)['surname']
document.getElementById('email').value = JSON.parse(localStorage.feedback)['email']
document.getElementById('phoneNumber').value = JSON.parse(localStorage.feedback)['phoneNumber']
document.getElementById('message').value = JSON.parse(localStorage.feedback)['message']

let form = document.getElementById('feedbackForm')
let validateBtn = document.getElementById('submitBtn')

let requieredFields = form.querySelectorAll('.requiered')

form.addEventListener('input', ()=>{
    feedback['name']=document.getElementById('name').value
    feedback['surname']=document.getElementById('surname').value
    feedback['email']=document.getElementById('email').value;
    (document.getElementById('phoneNumber').value==="+7(___)___-__-__")?feedback['phone']="":feedback['phone']=document.getElementById('phoneNumber').value
    feedback['message']=document.getElementById('message').value

    localStorage.feedback = JSON.stringify(feedback);
})

form.addEventListener('submit', () => {
    event.preventDefault()
    console.log(feedback)
    let arrayBlankFileds=[];
    for (var i = 0; i < requieredFields.length; i++) {
      if (!requieredFields[i].value) {
        requieredFields[i].classList.add("error");
        console.log("field is blank", requieredFields[i]);
        arrayBlankFileds.push(requieredFields[i].value);
      }
      else{
        requieredFields[i].classList.remove("error");
      }
    }
    if (arrayBlankFileds.length!=0){
        let strBlankFileds=""
        arrayBlankFileds.forEach(element => {
            strBlankFileds=element+", "
        });
        alert("Поля "+strBlankFileds+" не заполнены")
    }
})