export default `
a.profile(href="/pages/user-profile/user-profile.html") 
    = 'Профиль >'
form
    input.search(data-valid="true" type="text" placeholder="Поиск" name="search")
|!{content}
`;