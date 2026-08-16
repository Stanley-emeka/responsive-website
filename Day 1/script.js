// let btn = document.getElementById('btn');
// btn.addEventListener('click',follow);
// function follow(){
//     btn.textContent = "Following"
//     btn.style.backgroundColor = 'GREY'
//     btn.style.color = "black"

//     btn.removeEventListener('click',follow)
//     btn.addEventListener('click',unFollow);
// };

// function unFollow() {
//     btn.innerHTML = '<i class="fa-solid fa-user-plus"></i> Follow'
//     btn.style.backgroundColor = "blue"
//     btn.style.color = "white"

//     btn.removeEventListener('click',unFollow);
//     btn.addEventListener('click',follow);
     
// };

let btn = document.querySelector('#btn');

let isFollowing = true

btn.addEventListener('click',following);


function following(){
    if (isFollowing === true){
        btn.textContent = 'following';
        isFollowing = false
    }

else {
    btn.innerHTML = '<i class="fa-solid fa-user-plus"></i> Follow'
    isFollowing = true;
}
}