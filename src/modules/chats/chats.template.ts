export default `
a.profile(href="/user-profile") 
    = 'Профиль >'
form
    input.search(data-valid="true" type="text" placeholder="Поиск" name="search")
|!{content}
`;