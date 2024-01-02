<script>
    import { onMount } from "svelte";
  
    // List of navigation items
    const navItems = [
      { label: "about", href: "/" },
      { label: "blogs", href: "/blogs" },
      { label: "projects", href: "/projects" },
      { label: "misc", href: "/misc" },
      //{ label: "research", href: "/research" },
      //{ label: "art", href: "/art" },
    ];
  </script>
  
  <nav>
    <div class="inner">
      <ul class="navbar-list">
        {#each navItems as item}
          <li>
            <a href={item.href}>{item.label}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
  
  <style>
    nav {
      font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }

    .inner {
      margin-left: 5%;
    }
  
    .inner ul {
      display: block;
    }

    .inner li {
      display: inline;
      position: relative;
    }

    .navbar-list li {
      display: block;
      list-style-type: none;
      position: relative;
    }
  
    .navbar-list li:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
    }
  
    .navbar-list a {
      color: black;
      text-decoration: none;
      display: flex;
      height: 45px;
      align-items: center;
      padding: 0 10px;
      font-size: 20px;
    }
  
    @media only screen and (min-width: 767px) {
      .mobile-icon {
        display: none;
      }
  
      .navbar-list {
        display: flex;
        padding: 0;
      }
  
      .navbar-list a {
        display: inline-flex;
      }
    }
  </style>