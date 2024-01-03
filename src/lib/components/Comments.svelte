<script>
  import { addDoc, serverTimestamp, getDocs, query, where } from 'Firebase/firestore/lite';
  import { auth, commentCollection } from '$lib/Firebase.js';
  import CommentForm from '$lib/components/CommentForm.svelte';

  export let slug, comments;

  async function createNewComment(event) {
    console.log(event)
    if (!auth.currentUser) {  
      alert("need to login to comment") // TODO: make this better
      return;
    }
    console.log(auth.currentUser)
    await addDoc(commentCollection, {...event.detail, slug: event.detail.slug, owner: auth.currentUser.uid, timestamp: serverTimestamp()});
  }

  console.log(comments)
</script>

<div class="comment-container">
  <CommentForm on:sendCommentDetails={createNewComment} slug={slug} name={""} content={""}></CommentForm>
  <!--get comments from this slug-->
  {#each comments as c}
    <div class="comment">
      <p>{c.name}</p>
      <p>{c.content}</p>
    </div>
  {:else}
    <div>
      <p>no comments yet</p>
    </div>
  {/each}

</div>

<style>

  .comment-container {
    background-color: #faf7f7;
  }
  
  .comment {
    background-color: #ebf2ed;
    width: 50%;
    margin: 1%;
    padding: 1%;
    display: inline-block;
  }
</style>