console.log('Hello!');

const p = document.createElement("p");
p.textContent = "Thanks for visiting!";
document.body.appendChild(p);

const popularColors = ["Black", "White", "Navy", "Olive"];

popularColors.forEach(color => {
  console.log("Popular color:", color);
});

const message = document.createElement("p");
message.textContent = "Explore popular styles and color combos";
document.body.appendChild(message);
