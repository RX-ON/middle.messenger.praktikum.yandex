export default template = `
a.profile(href="/profile") 
    = 'Профиль >'
input.search(type="text" placeholder="Поиск")
|!{content}
`;