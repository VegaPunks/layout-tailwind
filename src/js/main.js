function toggleMenu() {
	const burger = document.querySelector("#burger");
	const menu = document.querySelector("#mobile-menu");
	const body = document.querySelector("body");
	burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		menu.classList.toggle("hidden");
		menu.classList.toggle("flex");
		body.classList.toggle("overflow-hidden");
	});

	window.addEventListener("resize", () => {
		if(window.innerWidth > 767.99) {
			menu.classList.add("hidden")
			menu.classList.remove("flex")
			burger.classList.remove("active")
			body.classList.remove("overflow-hidden")
		}
	})
};

toggleMenu();


// tabs 
function toggleTabs(tabsTriggerClass, tabsContentClass) {
	const tabsTriggers = document.querySelectorAll(tabsTriggerClass)
	const tabsContents = document.querySelectorAll(tabsContentClass)
	tabsContents.forEach(content => {
		content.classList.add("hidden")
		tabsContents[0].classList.remove("hidden")
	})
	tabsTriggers.forEach((trigger, index) => {
		trigger.addEventListener("click", () => {
			tabsTriggers.forEach(t => t.classList.remove("active"))
			trigger.classList.add("active")

			tabsContents.forEach(content => {
				content.classList.add("hidden")
			})
			tabsContents[index].classList.remove("hidden")
		})
	})
}

toggleTabs(".tab-trigger", ".tab-content")


const accordion = () => {
	const items = document.querySelectorAll(".accordion-trigger")
	const item = document.querySelectorAll(".accordion-item")
	console.log(items)
	items.forEach((el, i) => {
		el.addEventListener("click", () => {
			const parent = el.parentNode
			console.log(parent)
			if(parent.classList.contains("active")) {
				parent.classList.remove("active")
			} else {
				item.forEach(e => e.classList.remove("active"))
				parent.classList.add("active")
			}
		})
	})
}

accordion()