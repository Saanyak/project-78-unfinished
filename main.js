var images = ["https://www.pngitem.com/pimgs/m/57-573353_transparent-family-vector-png-cartoon-family-png-transparent.png","https://i.pinimg.com/474x/54/04/56/540456956472a7b54ba46ad723b7f9af.jpg","https://i.pinimg.com/474x/5e/5d/41/5e5d41652a38270aa370195ca55f3b09.jpg","https://toppng.com/uploads/preview/cartoon-characters-woman-11549705101raivnlw1cw.png","https://www.vhv.rs/dpng/d/414-4146986_man-animation-png-businessman-clipart-transparent-background-png.png"];

var names = ["The Kalyans","Saanya Kalyan","Rhea Kalyan","Nickesh Kalyan","Hinal Kalyan"];

var i = 0;

function update() {
    i++
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src=updatedImage;
    document.getElementById("family_member_name").innerHTML=updatedName;
}