let envoyer = document.querySelector(".envoyer") 
let tbody = document.querySelector("tbody")



envoyer.addEventListener("click",function(e){
    let email = document.querySelector("#email").value
    let nom = document.querySelector("#nom").value
    let prenom = document.querySelector("#prenom").value
    let nationalite = document.querySelector("#nationalite").value
    let age = document.querySelector("#age").value
    let discipline = document.querySelector("#discipline").value
    let poid = document.querySelector("#poid").value
    let grade = document.querySelector("#grade").value
    let club = document.querySelector("#club").value


    let incre = tbody.querySelectorAll("tr")
    
    let ok = incre.length + 1




    let tr = `<tr id="01">
    <td data-title="N°">0${ok}</td>
    <td data-title="Email">${email}</td>
    <td data-title="NOM">${nom}</td>
    <td data-title="PRENOM">${prenom}</td>
    <td data-title="NATIONALITE">${nationalite}</td>
    <td data-title="Age">${age}</td>
    <td data-title="Discipline">${discipline}</td>
    <td data-title="Poid">${poid}</td>
    <td data-title="Grade">${grade}</td>
    <td data-title="Club">${club}</td>
    <td data-title="MODIFICATION"><i class="edite" id="Edite-${incre}">Edite</i> <i class="delete" id="delet-${incre}">Delete</i></td>
  </tr>`
    tbody.innerHTML += tr

    
})
