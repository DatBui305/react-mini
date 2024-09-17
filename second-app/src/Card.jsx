function Card() {
    return (
        <div className="card">
            <img className="card-image" alt="profile picture" src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/456865758_3380742042228848_3837660410654769928_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGY1wGqRXXNSy21XylkH7nWVzOId8QqdsRXM4h3xCp2xLq1MhF5TNMW1iObRwSoWzS63hiMr5HIKl8Ey-Pn5huq&_nc_ohc=2e5y9760JucQ7kNvgGVHbqp&_nc_ht=scontent.fdad3-5.fna&oh=00_AYCbfsICl1XS-ggfQNDdW8gcVBnydyJLa9-6z6Y06_2gdA&oe=66CFB655"></img>
            <h2 className="card-title">Bui Anh Dat</h2>
            <p className="card-text">I am CS student</p>
        </div>
    );
}

export default Card;
/*
.card {
    border: 1px solid hsl(0, 0%, 80%);
    border-radius: 10px;
    box-shadow: 5px 5px 5px hsla(0, 0%, 0%, 0.1);
    padding: 30px;
    margin: 10px;
    text-align: center;
    max-width: 250px;
    display: inline-block;
}

.card-image {
    width: 60%;
    border-radius: 50%;
    height: auto;
    margin-bottom: 10px;
}

.card .card-title {
    font-family: Arial, sans-serif;
    margin: 0;
    color: hsl(0, 0%, 20%);
}

.card .card-text {
    font-family: Arial, sans-serif;
    color: hsl(0, 0%, 30%);
}
*/