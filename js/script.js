let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let look = document.getElementById("look");
let search = document.querySelector(".searchButton")
let searchResult = document.querySelector(".result");

// need to work on this to get search option work 

// search.addEventListener("click", () => {
//     // posts.style.color = 'red';
//     match();
// });

// let match = () => {
//   if(look.value==(data.map(x=>x.text))){
//     // posts.style.color = 'red';
//     data.map((x) => {
//       return (searchResult.innerHTML += `
//       <div>
//         <p>${x.text}</p>
//         <span class="options">
//         </span>
//       </div>
//       `);
//     });
//   }
// };

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      msg.innerHTML = "";
      acceptData();
    }
};

let data = [];

let acceptData = () => {
  data.push({
    text: input.value,
  })

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);

  createPost();
};

let createPost = () => {
  // posts.innerHTML = "";
  data.map((x) => {
    return (posts.innerHTML += `
    <div>
      <p>${x.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `);
  });
    // posts.innerHTML += `
    // <div>
    //   <p>${data[]}</p>
    //   <span class="options">
    //     <i onClick="editPost(this)" class="fas fa-edit"></i>
    //     <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    //   </span>
    // </div>
    // `;
    input.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();

    data.splice(e.parentElement.parentElement.id, 1);
  
    localStorage.setItem("data", JSON.stringify(data));
}; 


let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;

    deletePost(e);
};


(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  createPost();
})();