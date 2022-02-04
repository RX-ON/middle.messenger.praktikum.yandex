export default template = `
a.profile(href="/user-profile") 
    = 'Профиль >'
form
    input.search(type="text" placeholder="Поиск")
|!{content}
`;