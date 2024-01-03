<script lang="ts">
  export let slug;
  // get firebase stores based on the slug
</script>

<div class="comments_container">
    <h1>Discussion</h1>
    <form class="submit-form">
        <input type="text" id="name" name="name" placeholder="Name"><br>
        <input type="text" id="comment" name="comment" placeholder="Comment">
    </form>
    <div class="comment">
      <p>comment</p>
    </div>
    <div class="comment">
      <p>comment</p>
    </div>
</div>

<style>
  .comments_container {
    margin-top: 20%;
    background-color: #faf7f7;
    text-align: center;
    padding: 2%;
  }

  .submit-form {
    margin: 2%;
  }

  .comment {
    background-color: #ebf2ed;
    width: 50%;
    margin: 1%;
    padding: 1%;
    display: inline-block;
  }
</style>