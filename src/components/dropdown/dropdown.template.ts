export default `
.dropdown
    .three_dots
    .dropdown-content
        each position in dropList
            p(id=position.id) #{position.name}
.blur(id='blur')
`;