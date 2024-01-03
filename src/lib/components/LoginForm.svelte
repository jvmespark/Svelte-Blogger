<script>
    // have users logged in and auth before commenting
    import { auth , provider } from "$lib/Firebase.js";
    import { signInWithPopup, signOut } from "Firebase/auth";

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (err){
            console.error(err);
        }
    }
    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (err){
            console.error(err);
        }
    }
</script>

<div>
    <button on:click={signInWithGoogle}>Login with google</button>
    <button on:click={logOut}>logout</button>
</div>