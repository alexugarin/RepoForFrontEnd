

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
    phoneNumber:"",
    message:""
};

const feedbackKeys = Object.keys(feedback)
for (const key of feedbackKeys){
 // console.log(key)
  document.getElementById(key).value = JSON.parse(localStorage.feedback)[key]
}


let form = document.getElementById('feedbackForm')
let validateBtn = document.getElementById('submitBtn')

let requieredFields = form.querySelectorAll('.requiered')

form.addEventListener("input", () => {
  feedback["name"] = document.getElementById("name").value;
  feedback["surname"] = document.getElementById("surname").value;
  feedback["email"] = document.getElementById("email").value;
  document.getElementById("phoneNumber").value === "+7(___)___-__-__"
    ? (feedback["phoneNumber"] = "")
    : (feedback["phoneNumber"] = document.getElementById("phoneNumber").value);
  feedback["message"] = document.getElementById("message").value;

  localStorage.feedback = JSON.stringify(feedback);
});

document.getElementById('submitBtn').onclick = function() {
    event.preventDefault()
    console.log(feedback)
    let arrayBlankFileds=[];
    for (var i = 0; i < requieredFields.length; i++) {
      if (!requieredFields[i].value) {
        requieredFields[i].classList.add("error");
        console.log("field is blank", requieredFields[i]);
        
        arrayBlankFileds.push(requieredFields[i].getAttribute('placeholder'));
      }
      else{
        requieredFields[i].classList.remove("error");
      }
    }
    if (arrayBlankFileds.length != 0) {
      let strBlankFileds = "";
      console.log(arrayBlankFileds);
      strBlankFileds = arrayBlankFileds.join(", ");

      alert("Поля " + strBlankFileds + " не заполнены");
    } else {
      let strNameSurname = requieredFields[0].value+' '+requieredFields[1].value
      document.cookie = 'NameSurname=Jahn'
      alert( strNameSurname + ", спасибо за обращение!");
    }
}