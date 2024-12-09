/*{
  <div class="card">
        <h2>Naruto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          dignissimos?
        </p>
        <img src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg" alt="" />
      </div> 
}*/

const appDiv = document.querySelector(".app");

function generateCard(title, description, imgUrl) {
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
  appDiv.appendChild(cardDiv);
  const naruto = document.createElement("h2");
  naruto.innerText = title;
  cardDiv.appendChild(naruto);
  const desc = document.createElement("p");
  cardDiv.appendChild(desc);
  desc.innerText = description;
  const img = document.createElement("img");
  img.setAttribute("src", imgUrl);
  cardDiv.appendChild(img);
}

generateCard(
  "Naruto",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,dignissimos?",
  "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"
);
