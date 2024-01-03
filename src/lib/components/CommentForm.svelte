<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import LoginForm from '$lib/components/LoginForm.svelte';

    const dispatcher = createEventDispatcher()
    export let slug, name, content;
    function dispatchBlog() {
        dispatcher("sendCommentDetails", {
            slug,
            name,
            content
        })
        name = "", content = ""
    }
</script>
  
<div class="comments_container">

    <h1>Discussion</h1>
    <form class="submit-form">
        <input bind:value={name} type="text" id="name" name="name" placeholder="Name"><br>
        <input bind:value={content} type="text" id="comment" name="comment" placeholder="Comment">
        <br>
        <button on:click={dispatchBlog}>Submit</button>
    </form>
    <LoginForm></LoginForm>
</div>
  
<style>
.comments_container {
    margin-top: 20%;
    text-align: center;
    padding: 2%;
}

.submit-form {
    margin: 2%;
}

</style>