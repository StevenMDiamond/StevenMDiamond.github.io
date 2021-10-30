
function imagefun() {
            let Image_Id = document.getElementById('getImage');
            if (Image_Id.src.match("images/20210725-H30A9154.jpg")) {
                Image_Id.src = "images/20210826-H30A0141.jpg";
            }
            else {
                Image_Id.src = "images/20210725-H30A9154.jpg";
            }
}        
