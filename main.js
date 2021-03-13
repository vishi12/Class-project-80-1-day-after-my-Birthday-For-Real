name_of_the_student_array=[];
function submit() {
    var display_student_array=[];
    for (var v=1; v<=4; v++)
    {var name_of_student= document.getElementById("name_"+v).value;
    console.log(name_of_student);
    name_of_the_student_array.push(name_of_student);
}
console.log(name_of_the_student_array);
var length_of_name_of_the_student_array= name_of_the_student_array.length;
console.log(length_of_name_of_the_student_array);
for (var s=0; s<length_of_name_of_the_student_array; s++)
{
    display_student_array.push("<h4>NAME - "+ name_of_the_student_array[s] + "</h4>");
    console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_comma").innerHTML=display_student_array;
var remove_commas=display_student_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_comma").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
};
function sorting() {
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_student_array_sorting=[];
    var length_of_name_of_the_student_array= name_of_the_student_array.length;
    console.log(length_of_name_of_the_student_array);
    for (var s=0; s<length_of_name_of_the_student_array; s++)
{
    display_student_array_sorting.push("<h4>NAME - "+ name_of_the_student_array[s] + "</h4>");
    console.log(display_student_array_sorting);
}
console.log(display_student_array_sorting);
document.getElementById("display_name_with_comma").innerHTML=display_student_array_sorting;
var remove_commas=display_student_array_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_comma").innerHTML=remove_commas;  
}
