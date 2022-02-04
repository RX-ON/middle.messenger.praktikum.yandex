export default template = `
.img
    img.user-icon(src=src || "https://via.placeholder.com/150", alt="")
form
    |!{inputList}
|!{btn}
`;