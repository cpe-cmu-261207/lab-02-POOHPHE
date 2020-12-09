    function addLi(subject,term,gpa,credit){
        const li = document.createElement('LI')
        const t = document.createTextNode('Subject ID: '+subject+' Semester: '+term+' GPA: '+gpa+' Credit: '+credit)
        li.appendChild(t)
        li.className = "list-group-item"
        const btn = document.createElement('button')
        btn.appendChild(document.createTextNode('Delete'))
        btn.addEventListener ("click", function() {
            document.getElementById('Subject ID: '+subject+' Semester: '+term+' GPA: '+gpa+' Credit: '+credit).remove()
          })
        btn.className = "btn btn-danger"
        li.appendChild(btn)
        li.id = 'Subject ID: '+subject+' Semester: '+term+' GPA: '+gpa+' Credit: '+credit
        document.getElementById('list').appendChild(li)
    }

    function calculate(){

        const li = document.querySelectorAll('li')
        let gpa = 0.00
        let credit = 0
        let gpaCPE = 0.00
        let creditCPE = 0
        if(li.length === 0){
            document.getElementById('output').innerText = "There is no subject yet"
        }else if(!document.getElementById('switchTerm').checked){
           
            li.forEach(element => {
                let result = element.innerText.replace('Subject ID: ','')
                result = result.replace('Semester: ','')
                result = result.replace('GPA: ','')
                result = result.replace('Credit: ','')
                result = result.split(' ')
                if(/^261/.test(result[0]) || /^269/.test(result[0])){
                    creditCPE += parseFloat(result[3])
                    gpaCPE += parseFloat(result[2])*parseFloat(result[3])
                }
                    gpa+= parseFloat(result[2])*parseFloat(result[3])
                    credit += parseFloat(result[3])
                
                
                
                
            });
            gpa = parseFloat(gpa/credit*1.0)
            gpaCPE = parseFloat(gpaCPE/creditCPE*1.0)
            if(document.getElementById('switch').checked)
                if(creditCPE ===0)
                    document.getElementById('output').innerText = `There is no CPE grade`
                else
                    document.getElementById('output').innerText = `Your Faculty's grade is ${gpaCPE.toFixed(2)}`
            else
                document.getElementById('output').innerText = `Your all semester grade is ${gpa.toFixed(2)}`
        }else{
        li.forEach(element => {
            let result = element.innerText.replace('Subject ID: ','')
            result = result.replace('Semester: ','')
            result = result.replace('GPA: ','')
            result = result.replace('Credit: ','')
            result = result.split(' ')
            if(result[1] === document.getElementById('termFilter').value){
                gpa+= parseFloat(result[2])*parseFloat(result[3])
                credit += parseFloat(result[3])
                if(/^261/.test(result[0]) || /^269/.test(result[0])){
                    creditCPE += parseFloat(result[3])
                    gpaCPE += parseFloat(result[2])*parseFloat(result[3])
                }
                    gpa+= parseFloat(result[2])*parseFloat(result[3])
                    credit += parseFloat(result[3])
            }
        });
        gpa = parseFloat(gpa/credit*1.0)
        gpaCPE = parseFloat(gpaCPE/creditCPE*1.0)
        if(credit === 0){
            document.getElementById('output').innerText = `There is no grade in that semester`
        }else if(!document.getElementById('switch').checked){
            document.getElementById('output').innerText = `Your ${document.getElementById('termFilter').value}'s grade is ${gpa.toFixed(2)}`
        }else{
            if(creditCPE === 0)
                document.getElementById('output').innerText = `There is no CPE grade in that semester`
            else
                document.getElementById('output').innerText = `Your CPE ${document.getElementById('termFilter').value}'s grade is ${gpaCPE.toFixed(2)}`

        }

        }
        

        
    }
function add(){

    console.log(document.getElementById('switch').checked)
    const subject = document.getElementById('subject').value
    const term = document.getElementById('term').value
    const gpa = document.getElementById('gpa').value 
    const credit = document.getElementById('credit').value
    if(subject==="" || term ==="" ||gpa===""||credit===""){
        document.getElementById('output').innerText = `You must enter all input boxes`
    }else{

        addLi(subject, term, gpa,credit)
    }
    

}
function deleteSubject(id){
    console.log(id)
    //document.getElementById(id).innerHTML = ''
}