export default `
a.profile(href="/src/pages/user-profile/user-profile.pug") 
    = 'Профиль >'
form
    input.search(data-valid="true" type="text" placeholder="Поиск" name="search")
|!{content}
`;