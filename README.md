<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ozzythecoder/weekend-react-gallery">
    <img src="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">React Gallery</h3>

  <p align="center">
    A small gallery of images that you can view, like, add to, and delete from.
    <br />
    <a href="https://github.com/ozzythecoder/weekend-react-gallery"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

_Duration: Thanksgiving Weekend Project_

The React Gallery is a simple photo gallery, with the ability to store and show descriptions, user "likes", and new posts, as well as the ability to delete posts. This project is meant for me to fully immerse myself in building a full-stack React app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* Node.js & Express

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Node and Node Package Manager (npm)
* Local PostgreSQL server

### Installation

1. Clone this repository
   ```sh
   git clone https://github.com/ozzythecoder/weekend-react-gallery.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Connect to postgreSQL server `localhost` at port 5432
4. Build database and tables from the information in `database.sql`
5. In two separate terminals:
    - `npm run server` to start back-end server
    - `npm run client` to start front-end client and launch browser

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

* Mouse over any image to see a "Read More" prompt. Click this prompt to view the image's description, and click again to close it.
* Click the heart icon to "like" the image. This will increase its like count, and change the heart to solid red. Click it again to remove your "like".
* Click the garbage can icon to delete the image. **NOTE: This will permanently delete the image from the database.**
* Add a post of your own via the form at the top: Add the URL of an image, and a short description, then press the Post button to see it appended to the page. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/ozzythecoder/weekend-react-gallery](https://github.com/ozzythecoder/weekend-react-gallery)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This project was made possible by:
<ul>
<li>Prime Coding Academy</li>
<li>Unsplash and contributing photographers:</li>
  <ul>
  <li>Beach photo by Camille Minouflet</li>
  <li>Winter city photo by Chanan Greenblatt</li>
  <li>Bar photo by Qui Nguyen</li>
  <li>Soccer pgoto by Waldemar Brandt</li>
  <li>Parthenon photo by Patrick E</li>
  <li>Mountain goats photo by Medena Rosa</li>
  </ul>
</ul>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ozzythecoder/weekend-react-gallery.svg?style=for-the-badge
[contributors-url]: https://github.com/ozzythecoder/weekend-react-gallery/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ozzythecoder/weekend-react-gallery.svg?style=for-the-badge
[forks-url]: https://github.com/ozzythecoder/weekend-react-gallery/network/members
[stars-shield]: https://img.shields.io/github/stars/ozzythecoder/weekend-react-gallery.svg?style=for-the-badge
[stars-url]: https://github.com/ozzythecoder/weekend-react-gallery/stargazers
[issues-shield]: https://img.shields.io/github/issues/ozzythecoder/weekend-react-gallery.svg?style=for-the-badge
[issues-url]: https://github.com/ozzythecoder/weekend-react-gallery/issues
[license-shield]: https://img.shields.io/github/license/ozzythecoder/weekend-react-gallery.svg?style=for-the-badge
[license-url]: https://github.com/ozzythecoder/weekend-react-gallery/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/august-mcallister
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 