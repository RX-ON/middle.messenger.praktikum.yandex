export default `
a.profile(href="/settings") 
    = 'Профиль >'
form
    input.search(data-valid="true" type="text" placeholder="Поиск" name="search")
|!{content}
|!{btn}
`;