// typing effect
const text = "Frontend Developer | UI/UX Learner";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// year auto
document.getElementById("year").innerHTML = "© " + new Date().getFullYear() + " Isha Mungapatil";

// image modal for certificates
const certNames = document.querySelectorAll(".cert-name");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

certNames.forEach(certName => {
  certName.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = certName.dataset.src;
  }
});

closeBtn.onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
};