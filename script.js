function book(title, author, pages, done){
    this.title=title;
    this.author=author;
    this.pages=pages;   
    this.done=done;

    return `${title}+by+${author}+, +${pages}+ pages, +${done}`

}

const Hobbit= new book('hobbit', 'JRRTolkien', '300', 'finished');