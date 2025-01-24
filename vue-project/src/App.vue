<template>

  <header>
        <h1>MARIEL'S PERSONAL PROFILE WEB PAGE</h1>
      </header>
      
      <div class="small">
        
        <div>
          <h2>ABOUT ME</h2>
          <p>
          Hello, world! Welcome to my personal profile web page! My name is Mariel A. Gravidez, and I am currently a 19-year-old student. My pronouns are she/her.
          Let's connect on <a href="https://www.facebook.com/not.mrlgrvdzzzz" target="_blank">Facebook</a> and 
          <a href="https://www.instagram.com/not.mrlgrvdzzzz" target="_blank">Instagram</a>!
          </p>
        </div>
        
        <div>
        <h2>COURSE</h2>
        <p>I am a 2nd-year college student pursuing a Bachelor of Science in Information Technology who aims to be proficient in different programming languages and excel in the tech industry.</p>
        </div>
        
        <div>
        <h2>IT EXPERIENCE</h2>
        <p>I strive to be a holistic IT student by joining organizations, participating in competitions, and learning different programming languages.</p>
        </div>
        
        <div>
        <h2>HOBBIES & INTERESTS</h2>
        <p>During my free time, I enjoy watching films and series. I consider myself a cat person because cats pique my interest with their cute and cool characteristics.</p>
        </div>
        
        <div>
        <h2>GOALS IN LIFE/DREAM</h2>
        <p>My personal goal in life is to achieve the greatest gratitude, not just for the material possessions I have or the relationships I've built, but especially for myself.</p>
        </div>
      </div>
      
      <div class="big">
        
        <div>
        <h2>EDUCATION/ACHIEVEMENTS</h2>
        <table>
          <tr>
            <th>Educational Stage</th>
            <th>Level</th>
            <th>School</th>
            <th>Year</th>
            <th>Honors Received</th>
          </tr>
          <tr>
            <td>Elementary</td>
            <td>Grades 1-6</td>
            <td>Espiritu Santo Parochial School of Manila, Inc.</td>
            <td>2011-2017</td>
            <td>With Honors</td>
          </tr>
          <tr>
            <td rowspan="2">Junior High School</td>
            <td>Grade 7</td>
            <td>Espiritu Santo Parochial School of Manila, Inc.</td>
            <td>2017-2018</td>
            <td>With Honors</td>
          </tr>
          <tr>
            <td>Grades 8-10</td>
            <td>Statefields School, Inc.</td>
            <td>2018-2021</td>
            <td>With Honors (Grades 8 & 9)</td>
          </tr>
          <tr>
            <td>Senior High School</td>
            <td>Grades 11-12</td>
            <td>Statefields School, Inc.</td>
            <td>2021-2023</td>
            <td>With High Honors (Grade 11) & With Highest Honors and Conduct (Grade 12)</td>
          </tr>
          <tr>
            <td>College</td>
            <td>1st-2nd Year</td>
            <td>Asia Pacific College</td>
            <td>2023-Present</td>
            <td>With Honors (1st Year)</td>
          </tr>
          </table>
        </div>
        
        <div>
        <h2>PICTURE GALLERY</h2>
        <img id="about-me" src="https://raw.githubusercontent.com/magravidez/WEBPROG-Personal-Website/refs/heads/feature/css-flexbox/home/images/about-me.png" alt="About Mariel">
        <img id="dream-board" src="https://raw.githubusercontent.com/magravidez/WEBPROG-Personal-Website/refs/heads/feature/css-flexbox/home/images/dream-board.jpg" alt="Mariel's Dreams">
        </div>
        
      </div>

  <h1>Food</h1>
  <food-item/>
  <food-item2/>
  <food-item/>

</template>

<script></script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-color: cornflowerblue;
  color: floralwhite;
  padding: 20px;
  text-align: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3), 0 6px 15px rgba(0, 0, 0, 0.2);
}

h1 {
  font-family: Courier New, monospace;
  font-size: 2em;
  color: floralwhite;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
  letter-spacing: 5px;
  margin: 0;
}

h2 {
  font-family: Courier New, monospace;
  font-size: 1.5em;
  color: floralwhite;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
  letter-spacing: 5px;
  margin: 0;
}

body {
  font-family: Times New Roman, serif;
  background: url("https://raw.githubusercontent.com/magravidez/WEBPROG-Personal-Website/refs/heads/feature/css-flexbox/home/images/background.png") no-repeat fixed;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: black;
}

p {
  font-size: 1em;
  padding: 0;
}

.small {
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
  justify-content: center;
}
 
.small > div {
  background-color: rgba(176, 196, 222, 0.9);
  width: 200px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px;
  text-align: center;
  line-height: 20px;
}

.big {
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
  justify-content: center;
}
 
.big > div {
  background-color: rgba(176, 196, 222, 0.9);
  width: 500px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px;
  text-align: center;
  line-height: 20px;
}

table, th, td {
  width: auto;
  height: auto;
  font-size: 0.8em;
  line-height: 10px;
  border: 1.5px solid floralwhite;
  border-radius: 10px;
  margin-top: 10px;
}

th, td {
  padding: 5px;
  text-align: left;
}

th {
  background-color: cornflowerblue;
  color: floralwhite;
  font-family: Courier New, monospace;
}

#about-me {
  width: 200px;
  height: 200px;
  margin-top: 15px;
}

#dream-board {
  width: 250px;
  height: 200px;
  margin-top: 15px;
}

</style>     