export default function BookList() {
   let pageTitle = "The Best New Release Books You Must Read in 2023 and Beyond";
   let book1 = "https://www.beyondthebookends.com/wp-content/uploads/2023/02/The-Little-Village-of-Book-Lovers-.jpg";
   let book2 = "https://www.beyondthebookends.com/wp-content/uploads/2023/01/the-spectacular-.jpeg";
   let book3 = "https://www.beyondthebookends.com/wp-content/uploads/2023/01/The-Only-one-left.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The-Little-Village-of-Book-Lovers!"  height="400px" width="300px"/>
         <img src={book2} alt="The-spectacular!" height="400px" width="300px"/>
         <img src={book3} alt="The-Only-one-left!" height="400px" width="300px"/>
      </div>      
   );
}