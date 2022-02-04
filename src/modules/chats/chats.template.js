export default template = `
a.profile(href="/user-profile") 
    = 'Профиль >'
input.search(type="text" placeholder="Поиск")
|!{content}
`;