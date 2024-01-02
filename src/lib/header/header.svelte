
<script>
    import Navbar from '$lib/navbar/navbar.svelte'; 

    import * as custom from '../../../user/blogger-config.json'
    var aboutHTML=JSON.parse(JSON.stringify(custom.user.about));
    var links=custom.user.links
</script>

<div class="profile_container">
    <div class="profile">
        <div class="profile_inner">
            <div class="profile_img">
                <img src="https://i.pinimg.com/originals/4f/c9/81/4fc981d2f0d226ce16b40d35bdd25787.jpg" alt="asd">
            </div>
            <div class="profile_text">
                <span>
                    <h3>{custom.user.name}</h3>{@html aboutHTML}
                    <br>
                </span><br>
                {#each links as l}
                    <a href={l.source}>{l.name}</a>&nbsp;&nbsp
                {/each}
            </div>
        </div>
    </div>
</div>

<Navbar></Navbar>

<style>

.profile_container {
    margin-left: 5%;
    margin-top: 5%;
}

.profile {
    width: 40%;
}
.profile_inner {
  display: flex;
}
.profile_inner img {
    height: 150px;
    width: 150px;
}
.profile_img {
    padding-right: 20px;
}
.profile_text {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
    padding-right: 10px;
}

h3 {
    margin-top: 0;
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