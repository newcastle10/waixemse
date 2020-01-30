let add = document.querySelectorAll('.menu_ul a');
// console.log(add);
let bl = add.length;
// console.log(bl)
for (let i = 0; i < bl; i++) {
	
	add[i].addEventListener('click', function(e) {
		console.log(i)
		this.classList.toggle('added');
		if (this.classList.contains('added')) {
			this.textContent = "დამატებულია";

        } else {
        	this.textContent = "დამატება";
        }
});
}
