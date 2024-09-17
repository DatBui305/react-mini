function ProfilePicture() {
    const imageUrl = "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/456865758_3380742042228848_3837660410654769928_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGY1wGqRXXNSy21XylkH7nWVzOId8QqdsRXM4h3xCp2xLq1MhF5TNMW1iObRwSoWzS63hiMr5HIKl8Ey-Pn5huq&_nc_ohc=2e5y9760JucQ7kNvgGVHbqp&_nc_ht=scontent.fdad3-5.fna&oh=00_AYCbfsICl1XS-ggfQNDdW8gcVBnydyJLa9-6z6Y06_2gdA&oe=66CFB655";
    const handleClick = (e) => e.target.style.display = "none";
    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
    );
}
export default ProfilePicture