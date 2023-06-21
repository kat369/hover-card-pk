////////////////html/////////////////

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

<main>
  <div class = "card">
   
    <div class="card-content">
      <h2>
        Recieved Date
      </h2>
      
      <a href="#" class="button">
        27/08/1995
        <span class="material-symbols-outlined">
          arrow_right_alt
        </span>
      </a>
    </div>
  </div>
</main>

///////////////css////////////////////




main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-family: 'Roboto', sans-serif;
}

.card {
  background-color:rgb(25, 98, 141);
  width: 300px;
  height: 90px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: white;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
 
 }

  h2 {
    position: absolute;
    inset: auto auto 30px 30px;
    margin: 0;
    transition: inset .3s .3s ease-out;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: normal;
    text-transform: uppercase;
  }
  
  a {
    position: absolute;
    opacity: 0;
    max-width: 80%;
    transition: opacity .3s ease-out;
  }
  
  
  
  a {
    inset: auto auto 20px 30px;
    color: inherit;
    text-decoration: none;
  }
  
  .card:hover h2 {
    inset: auto auto 50px 30px;
    transition: inset .3s ease-out;
  }
  
 .card:hover a {
    opacity: 1;
    transition: opacity .3s .1s ease-in;
  }
  
  



.material-symbols-outlined {
  vertical-align: middle;
}

