<div class="profile_container">
    <div class="profile">
        <div class="profile_inner">
            <div class="profile_img">
                <img src="https://i.pinimg.com/originals/4f/c9/81/4fc981d2f0d226ce16b40d35bdd25787.jpg" alt="asd">
            </div>
            <div class="profile_text">
                <span>
                    <h3>James Park</h3>Undegraduate computer science major at <a href="https://en.wikipedia.org/wiki/Rensselaer_Polytechnic_Institute">RPI</a>.<br>
                </span><br>
                <a href="">Github</a>&nbsp;&nbsp;<a href="">LinkedIn</a>&nbsp;&nbsp;<a href="">Youtube</a>
            </div>
        </div>
    </div>
</div>

<style>
/*
module controller
.profile_container {
}
*/
.profile {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.profile_inner {
  display: flex;
  
  padding-bottom: 15%;
}
.profile_inner img {
    height: 200px;
}
.profile_img {
    padding: 20px;
}
.profile_text {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
}

/* 768px */
@media only screen and (max-width:48em) {
   .profile_inner { 
      display:table;
      width:100%;
   }
   .profile_text {
      display:block;
      width:100%;
   }
   .profile_img { display:table-caption; }
}

</style>