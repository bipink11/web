//Book Constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//Ui contructor
function UI() {

}
//add book to the list
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    row.innerHTML = `
 <td>${book.title}</td>
 <td>${book.author}</td>
 <td>${book.isbn}</td> 
 <td><a href="#" class ="delete" >X</a></td> 
 `;
    list.appendChild(row);
    console.log(row);

}

//show Alert
UI.prototype.showAlert = function(message,className){

    //create div
    const div = document.createElement('div');
    //Add classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
   //get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div,form);

    //Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}

//Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

//Clear Fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}


//Event Listner
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        //get form value
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        //instantiate book
        const book = new Book(title, author, isbn);

        // //instantiate Ui
        const ui = new UI();

        //validate
        if (title === '' || author === '' || isbn === '') {
            //Error alert
            ui.showAlert('please fill all fields','error');
        }
        else {
            //add book to list
            ui.addBookToList(book);
            //show success
            ui.showAlert('Book Added!','success');            
            //clear fields
            ui.clearFields();
        }
        e.preventDefault();
    })

    //Event listner delete
    document.getElementById('book-list').addEventListener('click',function(e){
        console.log(123);
        const ui = new UI();
        ui.deleteBook(e.target);
        //show message
        ui.showAlert('Book Removed!','success');

        e.preventDefault();
    })
