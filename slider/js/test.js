(function(){

	var counter = 0,
		items = document.querySelectorAll(".slideshow figure"),
		next = document.getElementsByClassName("next")[0],
		prev = document.getElementsByClassName("back")[0],
		numItems = items.length;

	function showCurrent(){
		var itemsToShow = Math.abs(counter % numItems);
		for (var i = 0; i < items.length; i++) {
			
			items[i].classList.remove("show");
			items[itemsToShow].classList.add("show");

		};

	};

	next.addEventListener("click",function(){
		counter++;
		showCurrent();
	});

	prev.addEventListener("click", function(){
		counter--;
		showCurrent();
	});
}());

