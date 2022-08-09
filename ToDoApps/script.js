const names = document.querySelector('#names');
const department = document.querySelector('#department');
const id = document.querySelector('#id');
const cgpa = document.querySelector('#cgpa');
const btn = document.querySelector('.btn');
const std_info = document.querySelector('#student_info');

btn.addEventListener('click',function(e){
    e.preventDefault();

    if(names.value == '' && department.value == '' && id.value == '' && cgpa.value == ''){
        alert('please fill up the form');
    }
    else{
        const newRow = document.createElement("tr");
        
        const newNames = document.createElement('td');
        newNames.innerHTML = names.value;
        newRow.appendChild(newNames);

        const newDepartment = document.createElement('td');
        newDepartment.innerHTML = department.value;
        newRow.appendChild(newDepartment);

        const newid = document.createElement('td');
        newid.innerHTML = id.value;
        newRow.appendChild(newid);

        const newcgpa = document.createElement('td');
        newcgpa.innerHTML = cgpa.value;
        newRow.appendChild(newcgpa);

        std_info.appendChild(newRow);
    }
});
